import styles from "./SideNav.module.css"
import { useState } from "react"



const items = [
  {
    title: "Women's Fashion",
    links: ["Link 1", "Link 2", "Link 3"],
    svg: {
        width:"8",
        height:"13",
        viewBox:"0 0 8 13",
        fill:"none",
        xmlns:"http://www.w3.org/2000/svg",
    },
    path:{
        d:"M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z",
        fill:"black"
    }
  },
  {
    title: "Men's Fashion",
    links: ["Link 1", "Link 2"],
    svg: {
        width:"8",
        height:"13",
        viewBox:"0 0 8 13",
        fill:"none",
        xmlns:"http://www.w3.org/2000/svg",
    },
    path:{
        d:"M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z",
        fill:"black"
    }
  },
  { title: "Electronics", href: "#"},
  { title: "Home & Lifestyle", href: "#"},
  { title: "Medicine", href: "#" },
  { title: "Sports & Outdoor", href: "#"},
  { title: "Baby’s & Toys", href: "#"},
  { title: "Groceries & Pets", href: "#"},
  { title: "Health & Beauty", href: "#"},
];

export default function SideNav(){
    const [openIndex, setOpenIndex] = useState(null);
    function handleClick(index){
        setOpenIndex((prev) => (prev === index ? null : index));
    }
    return(
        <ul className={styles.items}>
            {items.map((item, index) => (
                <li className={styles.item} key={item.title}>
                    <nav className={styles.dropDownTitle} onClick={() => handleClick(index)}>
                        <a href ={item.href}>{item.title}</a>
                        {item.svg && item.path && (<svg width={item.svg.width} height={item.svg.height} fill={item.svg.fill} xmlns={item.svg.xmlns}>
                            <path d={item.path.d} fill={item.path.fill}/>
                        </svg>
                        )}
                    </nav>
                    {item.links && openIndex === index && (
                        <div className={styles.dropDowns}> 
                            {item.links.map((link, liIndex) => (
                                <a href="link">{link}</a>
                            ))}
                    </div>
                    )}
                </li>
                ))}
        </ul>
    );
}