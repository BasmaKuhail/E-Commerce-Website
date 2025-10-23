import styles from "./Contact.module.css"

import telephone from "../../assets/Contact/telephone.svg"
import mail from "../../assets/Contact/mail.svg"
import Button from "../Button/Button"

const contactData =[
    {logo: telephone,
        title: "Call To Us",
        lines: ["We are available 24/7, 7 days a week", "Phone: +8801611112222"],
    },
    {logo: mail,
        title: "Write To Us",
        lines: ["Fill out our form and we will contact you within 24 hours.", "Emails: customer@exclusive.com", "Emails: support@exclusive.com"],
    }
]
export default function Contact(){
    return(<div className={styles.contactContainer}>
        <div className={styles.contactData}>
            {console.log(contactData)}
            {contactData.map((item, index) =><> <ul className={styles.contactItem}>
                    <li className={styles.item}>
                        <img src={item.logo} className={styles.img}/>
                        <h3>{item.title}</h3>
                    </li>                    
                    {item.lines.map((line => <li className={styles.item}>{line}</li>))}

                </ul>
                {(!index == contactData.length -1) && <hr className={styles.hr}/>}</>
                )}
                
        </div>
        <div className={styles.contactForm}>
            <div className={styles.personalDataContainer}>
                <input className={styles.personalData} placeholder="Your Name" type="text"/>
                <input className={styles.personalData} placeholder="Your Email" type="email"/>
                <input className={styles.personalData} placeholder="Your Phone" type="text"/>
            </div>
            <div className={styles.msgContainer}>
                <textarea className={styles.msg} placeholder="Your Message" type="text"/>
            </div>
            <div className={styles.btnContainer}>
                <Button className={styles.btn} text="Send Message"/>    
            </div>
            
        </div>
    </div>)
}