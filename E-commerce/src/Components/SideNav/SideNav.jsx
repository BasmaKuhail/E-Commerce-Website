import { Link, useLocation } from "react-router-dom";

import useFetchData from "../CategoryList";
import styles from "./SideNav.module.css"
import { useState, useEffect } from "react"
import useFetchCategories from "../CategoryList";



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
    const {categories} = useFetchCategories();
    console.log(categories)

    const [openIndex, setOpenIndex] = useState(null);
    function handleClick(index){
        setOpenIndex((prev) => (prev === index ? null : index));
    }

    //lock body scroll when sidenav is open
    useEffect(() => {
        if(isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [isOpen]);

    return(<>
        {isOpen && <div className="fixed inset-0 bg-black/40 z-90 lg:hidden" onClick={onClose}></div>}
        
        <aside
            className={`
                fixed top-0 left-0 h-screen w-64 bg-white
                z-[100] transform transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
                lg:translate-x-0 lg:static lg:h-auto
            `}
        >
            <ul className="mt-12 px-5 space-y-5">
                {categories.map((category, index) => (
                    <li className="text-base font-medium" key={category.title}>
                        <Link 
                            className="flex items-center justify-between cursor-pointer hover:text-red-500 transition"
                            to="/products" 
                            state={{ category: category}} 
                            key={category}
                            onClick={() => handleClick(index)}
                        >
                            <span>
                                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                            </span>

                            {/* Optional arrow */}
                            {category.svg && category.path && (
                            <svg
                                width={category.svg.width}
                                height={category.svg.height}
                                viewBox={category.svg.viewBox}
                                className={`transition-transform ${
                                openIndex === index ? "rotate-90" : ""
                                }`}
                            >
                                <path d={category.path.d} fill={category.path.fill} />
                            </svg>
                            )}
                        </Link>
                        {/* Dropdown (optional) */}
                        {category.links && openIndex === index && (
                            <div className="mt-3 ml-3 flex flex-col gap-2 text-sm text-gray-600">
                            {category.links.map((link, i) => (
                                <a key={i} href="#" className="hover:underline">
                                {link}
                                </a>
                            ))}
                            </div>
                        )}
                    </li>   
                ))}
            </ul>
        </aside>
    </>);
}