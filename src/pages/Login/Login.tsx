import React, {useContext, useState} from 'react';
import {FireContext} from "../../context/FirebaseContext";
import firebase from "firebase/app";
import FormControl from '@material-ui/core/FormControl';
import {Button, Input, InputLabel} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {validateEmail, validatePassword} from "../../service/validation";
import {useInput} from "../../hooks/useInput";
import { Visibility, VisibilityOff} from "@material-ui/icons";
import {Link} from 'react-router-dom'
import {REGISTRATION_ROUTE} from "../../router/ROUTES";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        login:{
            margin: '20px auto',
            padding: '15px',
            border: '3px solid #ECECEC'
        },
        form:{
            width: '100%',
            margin: '20px 0'
        },
        globalError:{
            color: 'red',
            fontSize: '18px'
        }
    }),
);



const Login = () => {
    const classes = useStyles()

    const email = useInput('')
    const password = useInput('')

    const [visable, setVisable] = useState<boolean>(true)

    // @ts-ignore
    const {auth} = useContext(FireContext)

    const validateErrors = (email:string, password: string) => {
        return (validateEmail(email) && validatePassword(password))
    }


    const localLogin = async () => {
        const user = await auth.signInWithEmailAndPassword(email, password)
        console.log(user)
    }

    const googleLogin = async() => {
        const provider:any = new firebase.auth.GoogleAuthProvider();
        const user:any = auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <Grid>
            <Grid item md={4} sm={10} className={classes.login}>
                <Typography  variant="h4"> Sign in </Typography>

                <form onSubmit={async (e:React.SyntheticEvent)=>{
                    e.preventDefault()
                }}>
                    <FormControl className={classes.form} error={!validateEmail(email.value)}>
                        <InputLabel htmlFor="email">Email address</InputLabel>
                        <Input id="email" aria-describedby="email" {...email} />
                    </FormControl>
                    <FormControl className={classes.form}  error={!validatePassword(password.value)}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input type={visable? 'password' : 'text'} id="password" aria-describedby="password" {...password} />

                        {visable ?
                            <Visibility style={{position: 'absolute', top: '40%', right: '0'}}
                                        onClick={() => setVisable(false)}/>
                            :
                            <VisibilityOff style={{position: 'absolute', top: '40%', right: '0'}}
                                           onClick={() => setVisable(true)}/>
                        }
                    </FormControl>
                    <Button
                        type='submit'
                        color='primary'
                        variant='contained'
                        disabled={!validateErrors(email.value, password.value)}
                        onClick={()=> localLogin()}
                    >Sign in</Button>
                    <div className="" style={{marginTop:'15px'}}>
                        <Link to={REGISTRATION_ROUTE}>Do not have account? Sign up </Link>
                    </div>
                </form>
            </Grid>
            <Grid>
                <div className=""  style={{color:'#ECECEC'}}>
                    <Button color='secondary' onClick={()=> googleLogin()} variant='contained'>Google</Button>
                </div>
            </Grid>
        </Grid>
    );
};

export default Login;