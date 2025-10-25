import styles from "./About.module.css"
import Path from "./Path"
import story from "../../assets/About/story.png"

import delivery from "../../assets/EndingIcons/delivery.svg"
import secure from "../../assets/EndingIcons/secure.svg"
import service from "../../assets/EndingIcons/service.svg"
import EndingItem from "../Ending/EndItem"

import person1 from "../../assets/About/person1.png"
import person2 from "../../assets/About/person2.png"
import person3 from "../../assets/About/person3.png"
import Ending from "../Ending/Ending"

const data =[
    { url:delivery,
        title:"FREE AND FAST DELIVERY",
        text:"Free delivery for all orders over $140"
    },
    { url:secure,
        title:"24/7 CUSTOMER SERVICE",
        text:"Friendly 24/7 customer suppoet"
    },
    { url:service,
        title:"MONEY BACK GUARANTEE",
        text:"We reurn money within 30 days"
    },{ url:service,
        title:"MONEY BACK GUARANTEE",
        text:"We reurn money within 30 days"
    }
]

const people = [
    { img: person1,
        name: "Tom Cruise",
        title: "Founder & Chairman"
    },
{ img: person2,
        name: "Tom Cruise",
        title: "Founder & Chairman"
    },
    { img: person3,
        name: "Tom Cruise",
        title: "Founder & Chairman"
    },
]
function Category(){
    return(<div className={styles.Container}>
        {data.map((item => <div  id={styles.category}> 
            <EndingItem icon={item.url} title={item.title} text={item.text}/>
        </div>))}
    </div>)

}

function Img (){
    return <img src={story} className={styles.img}/>
}
function Story(){
    return(<>
        <div className={styles.storyContainer}>
            <div className={styles.textContainer}>
                <h1>Our Story</h1>
                <p className={styles.mainText}> jkhsbo lhaebij klhjtnai lheaj nadbjn mbSNB jkbkrbae  jkhsbo lhaebij klhjtnai lheaj nadbjn mbSNB jkbkrbae jkhsbo lhaebij klhjtnai lheaj nadbjn mbSNB jkbkrbae jkhsbo lhaebij klhjtnai lheaj nadbjn mbSNB jkbkrbae jkhsbo lhaebij klhjtnai lheaj nadbjn mbSNB jkbkrbae jkhsbo lhaebij klhjtnai lheaj nadbjn mbSNB jkbkrbae jkhsbo lhaebij klhjtnai lheaj nadbjn mbSNB jkbkrbae</p>
            </div>
            <div>
                <Img/>
            </div>
        </div>
        
    </>)
}

function People(){
    return(<div className={styles.peopleContainer}>
        {console.log(people.length)}
            {people.map((item => <div className={styles.personContainer}>
                <img className={styles.presonImg} src={item.img}/>
                <h2>{item.name}</h2>
                <p>{item.title}</p>
            </div>))}
        </div>)
}
export default function About(){
    return(<div className="section-content" id={styles.aboutContainer}>
        <Path/>
        <Story/>
        <Category/>
        <People/>
        <Ending/>
    </div>)
}