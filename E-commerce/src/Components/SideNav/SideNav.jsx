import { Link, useLocation } from "react-router-dom";

import useFetchData from "../ProductList";
import styles from "./SideNav.module.css"
import { useState } from "react"



const items = [
  {title: "Women's Fashion",
    links: ["Link 1", "Link 2", "Link 3"],
    svg: {
        width:"8",
        height:"13",
        viewBox:"0 0 8 13",
        fill:"none",
        xmlns:"http://www.w3.org/2000/svg"},
    path:{
        d:"M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z",
        fill:"black"}
  },
  {title: "Men's Fashion",
    links: ["Link 1", "Link 2"],
    svg: {
        width:"8",
        height:"13",
        viewBox:"0 0 8 13",
        fill:"none",
        xmlns:"http://www.w3.org/2000/svg"},
    path:{
        d:"M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z",
        fill:"black"}
  },
  { title: "Electronics", href: "#"},
  { title: "Home & Lifestyle", href: "#"},
  { title: "Medicine", href: "#" },
  { title: "Sports & Outdoor", href: "#"},
  { title: "Baby’s & Toys", href: "#"},
  { title: "Groceries & Pets", href: "#"},
  { title: "Health & Beauty", href: "#"},
];

export default function SideNav({ isOpen, onClose }){
    const {uniqueCategory} = useFetchData();
    console.log(uniqueCategory)


    const [openIndex, setOpenIndex] = useState(null);
    function handleClick(index){
        setOpenIndex((prev) => (prev === index ? null : index));
    }
    return(<>
    {isOpen && <div className={styles.overlay} onClick={onClose}></div>}
    
    <aside className={`${styles.sideNav} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.items}>
            {uniqueCategory.map((category, index) => (
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} 
                    to="/products" 
                    state={{ category }}
                >
                    <li className={styles.item} key={category.title}>
                        <nav className={styles.dropDownTitle} onClick={() => handleClick(index)}>
                            <a href ={category.href}>{category.charAt(0).toUpperCase() + category.slice(1)}</a>
                            {category.svg && category.path && (<svg width={category.svg.width} height={category.svg.height} fill={category.svg.fill} xmlns={category.svg.xmlns}>
                                <path d={category.path.d} fill={category.path.fill}/>
                            </svg>
                            )}
                        </nav>
                        {category.links && openIndex === index && (
                            <div className={styles.dropDowns}> 
                                {category.links.map((link, liIndex) => (
                                    <a href="link">{link}</a>
                                ))}
                        </div>
                        )}
                    </li>
                </Link>
                ))}
        </ul></aside>
        
        </>
    );
}