import React, {useState} from "react";

interface IUseInput{
    value: string,
    onChange: () => void
}

export const useInput = (initValue: string) :IUseInput  => {
    const [value, setValue] = useState(initValue)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange
    } as IUseInput
}