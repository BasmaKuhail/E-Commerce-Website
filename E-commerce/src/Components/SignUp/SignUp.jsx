import styles from "./SignLog.module.css"
import cartImg from "../../assets/SignUp/beatsnoop.png"
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";



function Img (){
    return <img src={cartImg} className={styles.img}/>
}

function Button({title}){
    return <button className={styles.btn}>{title}</button>
}

export default function SignUp({title,sign, btntitle}){
    return(<div className={styles.container}>
        <Img/>

        <div className={styles.formContent}>
            <div>
                <h1>{title}</h1>
                <p>Enter your details below</p>
            </div>
            
            <div className={styles.formData}>
                {sign && <TextField id="standard-basic" label="Name" variant="standard" />}
                <TextField id="standard-basic" label="Email or Phone" variant="standard" />
                <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                />
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", gap:"20px"}}>
                    <Button title={btntitle}></Button>
                    {!sign && <a style={{color:"var(--red)"}}href="#" >Forget Password?</a>}
                </div>
                
            </div>
            {sign && <p className={styles.end}>Already have account? <Link to="/login">Log in</Link></p>}

        </div>
        
    </div>)
}