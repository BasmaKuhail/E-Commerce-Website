import styles from "./SignLog.module.css"
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Img from "./Img";
import Button from "./Button";
import Title from "./Title";


export default function Login({title, btntitle}){
    function handleLogin(){
        return 0
    }
    return(<div className={styles.container}>
        <Img/>
        <div className={styles.formContent}>
            
            <Title title={title}/>
            <div className={styles.formData}>
                
                <TextField style={{width:"310px"}} id="standard-basic" label="Email or Phone" variant="standard" />
                <TextField
                    style={{width:"310px"}}
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
                <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center", gap:"20px"}}>
                    <Button style={{width:"100%"}} title={btntitle} onclick={handleLogin}/>
                    <a style={{color:"var(--red)"}}href="#" >Forget Password?</a>
                </div>
                
            </div>
            <p className={styles.end}>Dont have an account? <Link to="/signup">Sign Up</Link></p>

        </div>
        
    </div>)
}