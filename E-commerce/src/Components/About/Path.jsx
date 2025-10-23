import styles from "./About.module.css"
import { Link } from "react-router-dom";

const pathData = [
    {link: "/",
        title: "Home"
    },{
       link: "/about",
        title: "About" 
    }
]
export default function Path(){
    return(<div className={styles.pathContainer}>
        {pathData.map((path => <Link to={path.link}>{path.title}</Link>))}
    </div>)
}