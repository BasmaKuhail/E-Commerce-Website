import styles from "./SignLog.module.css"
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Img from "./Img";
import Button from "./Button";
import Title from "./Title";
import { useState } from "react";
import useFetchUsers from "../UsersList";

import {useNavigate} from 'react-router-dom'


export default function Login({title, btntitle}){

    const navigate = useNavigate()

    const [warning, setWarning] = useState("")
    const { users } = useFetchUsers();
    console.log(users)

    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmailOnChange(e){
        setEmail(e.target.value)
        console.log(email)
    }

    function handlePasswordOnChange(e){
        setPassword(e.target.value)
        console.log(password)
    }


    let userFound = false;

    function searchUserByEmailOrPhone(){
        users.map((user =>{
            if(user.email == email || user.phone == email){
                userFound = true;
                return userFound
            }
        }))
        console.log(userFound)
        return userFound;
    }
    function checkPassword(){
        let correctPassword = false;
        users.map((user =>{
            if(user.password == password){
                correctPassword = true
            }
        }))
        return correctPassword;
    }
    function handleLogin(){
        console.log("login")
        console.log(searchUserByEmailOrPhone())
        if(password == ""){
            setWarning("Please fill the Password")
            return;
        }else if (email == ""){
            setWarning("Please fill the email or phone")
            return;
        }
        if(searchUserByEmailOrPhone()){
            if(checkPassword()){
                setWarning("")
                console.log("all correct")
                navigate('/')

            }else{
                console.log("Incorrect password!")
                setWarning("Incorrect password!")
            }
        }else{
            console.log("Incorrect Email or Phone!")
            setWarning("Incorrect Email or Phone!")
        }
    }

    return(<div className={styles.container}>
        <Img/>
        <div className={styles.formContent}>
            
            <Title title={title}/>
            <div className={styles.formData}>
                
                <TextField 
                    style={{width:"310px"}} 
                    id="standard-basic" 
                    label="Email or Phone" 
                    variant="standard" 
                    htmlFor="emailPhone"
                    onChange={handleEmailOnChange}
                />
                <TextField
                    style={{width:"310px"}}
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    htmlFor="password"
                    onChange={handlePasswordOnChange}
                />
                <p style={{color:"var(--red)"}}>{warning}</p>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center", gap:"20px"}}>
                    <Button style={{width:"100%"}} title={btntitle} onclick={handleLogin}/>
                    <a style={{color:"var(--red)"}}href="#" >Forget Password?</a>
                </div>
                
            </div>
            <p className={styles.end}>Dont have an account? <Link to="/signup">Sign Up</Link></p>

        </div>
        
    </div>)
}