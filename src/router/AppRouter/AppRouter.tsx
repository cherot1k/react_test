import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {
    LOGIN_ROUTE,
    POSTS_ROUTE,
    privateRoutes,
    publicRoutes,
} from "../ROUTES";
import {useAuthState} from "react-firebase-hooks/auth";
import {FireContext} from "../../context/FirebaseContext";
import Default from "../layouts/default";
import Guest from "../layouts/guest";
import './Loader.css'

const Loader = () => {
    return  <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
}


const AppRouter = () => {
    // @ts-ignore
    const {auth} = useContext(FireContext)
    const [user, loading, error] = useAuthState(auth)


    if(loading){
        return <Loader/>
    }

    return user?
        (
            <Default>
                <Switch>
                    {privateRoutes.map(route =>{
                            console.log(route)
                            if(route.exact){
                                return <Route key={route.path} path={route.path} exact component={route.component}/>
                            }else {
                                return <Route key={route.path} path={route.path} component={route.component}/>
                            }
                        }
                    )}

                    <Redirect to={POSTS_ROUTE}/>
                </Switch>
            </Default>
        ):
        (
            <Guest>
                    <Switch>
                        {publicRoutes.map(route =>{
                                if(route.exact){
                                    return <Route key={route.path} path={route.path} exact component={route.component}/>
                                }else {
                                    return <Route key={route.path} path={route.path} component={route.component}/>
                                }
                            }
                        )}
                        <Redirect to={LOGIN_ROUTE}/>
                    </Switch>
            </Guest>
        )
};

export default AppRouter;