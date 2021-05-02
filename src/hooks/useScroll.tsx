import {Ref, useEffect, useRef, useState} from "react";
import {photoStore} from "../store/Photoes";

export default function useScroll(parentRef: Ref<HTMLDivElement>, childRef: Ref<HTMLDivElement>){
    const observer = useRef<any>()

    const LIMIT: number = 20
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        // @ts-ignore
        const parentCurrent = parentRef?.current
        // @ts-ignore
        const childCurrent =  childRef.current

        const options = {
            root: parentCurrent,
            rootMargin: '0px',
            threshold: 0
        }

        observer.current = new IntersectionObserver(async ([target]) => {
            if(target.isIntersecting){
                await photoStore.setPhotos(LIMIT, page)
                setPage(prevState => prevState + 1)
            }
        }, options)

        observer.current.observe(childCurrent)

        return function (){
            // @ts-ignore
            observer.current.unobserve(childCurrent)
        }

    }, [page])

}