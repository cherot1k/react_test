import React, {useContext, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import {validateEmail, validatePassword} from "../../service/validation";
import {Button, Input, InputLabel} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useInput} from "../../hooks/useInput";
import {FireContext} from "../../context/FirebaseContext";

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

const Registration = () => {
    const classes = useStyles()

    const email = useInput('')
    const password = useInput('')
    const confirmPassword = useInput('')

    const [passwordVisable, setPasswordVisable] = useState<boolean>(true)
    const [confirmPasswordVisable, setConfirmPasswordVisable] = useState<boolean>(true)


    const validateErrors = (email:string, password: string, confirmPassword:string) => {
        return (validateEmail(email) && validatePassword(password)) && (password === confirmPassword)
    }

    // @ts-ignore
    const {auth} = useContext(FireContext)

    const localRegistration = () => {
        const user = auth.createUserWithEmailAndPassword(email.value, password.value)
        console.log(user)
    }

    return (
        <Grid>
            <Grid item md={4} sm={10} className={classes.login}>
                <Typography  variant="h4"> Sign up </Typography>

                <form onSubmit={async (e:React.SyntheticEvent)=>{
                    e.preventDefault()
                }}>
                    <FormControl className={classes.form} error={!validateEmail(email.value)}>
                        <InputLabel htmlFor="email">Email address</InputLabel>
                        <Input id="email" aria-describedby="email" {...email} />
                    </FormControl>
                    <FormControl className={classes.form}  error={!validatePassword(password.value)}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input type={passwordVisable? 'password' : 'text'} id="password" aria-describedby="password" {...password} />

                        {passwordVisable ?
                            <Visibility style={{position: 'absolute', top: '40%', right: '0'}}
                                        onClick={() => setPasswordVisable(false)}/>
                            :
                            <VisibilityOff style={{position: 'absolute', top: '40%', right: '0'}}
                                           onClick={() => setPasswordVisable(true)}/>
                        }
                    </FormControl>

                    <FormControl className={classes.form}  error={!validatePassword(confirmPassword.value)}>
                        <InputLabel htmlFor="confrirmPassword">Confirm password</InputLabel>
                        <Input type={confirmPasswordVisable? 'password' : 'text'} id="confrirmPassword" aria-describedby="confrirmPassword" {...confirmPassword} />

                        {confirmPasswordVisable ?
                            <Visibility style={{position: 'absolute', top: '40%', right: '0'}}
                                        onClick={() => setConfirmPasswordVisable(false)}/>
                            :
                            <VisibilityOff style={{position: 'absolute', top: '40%', right: '0'}}
                                           onClick={() => setConfirmPasswordVisable(true)}/>
                        }
                    </FormControl>
                    <Button
                        type='submit'
                        color='primary'
                        variant='contained'
                        disabled={!validateErrors(email.value, password.value, confirmPassword.value)}
                        onClick={()=> localRegistration()}
                    >Sign up</Button>
                </form>
            </Grid>
        </Grid>
    );
};

export default Registration;