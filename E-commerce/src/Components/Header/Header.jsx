import styles from "./Header.module.css"
import { Link } from "react-router-dom";

import cancle from "../../assets/Header/cancle.svg"
import logout from "../../assets/Header/logout.svg"
import user from "../../assets/Header/user.svg"
import myOrder from "../../assets/Header/myORder.svg"
import rating from "../../assets/Header/rating.svg"
import { memo, useEffect, useRef, useState } from "react";
import useFetchData from "../ProductList";


function Search(){
    const { data: products} = useFetchData();
    const [userInput, setUserInput] = useState("")

    const [searchResults, setSearchResults] = useState([])

    const searchRef = useRef(null);

    function handleChange(e){
        const newInput = e.target.value;
        setUserInput(newInput)
        setSearchResults(search(newInput.toLowerCase()))
        console.log(searchResults)
    }

    function search(input){
       return products.filter(product => product.title.toLowerCase().includes(input))
    }

    useEffect(() => {
        function handleClickOutside(e) {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setSearchResults([]);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return(
        <div ref={searchRef}>
        <nav className={styles.searchNav}>
            {console.log(userInput)}
            <input onChange={handleChange} className={styles.search} placeholder="What are you looking for?" type="text" value={userInput}/>
            <svg className={styles.searchButton} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        </nav>
        {searchResults.length > 0 && (
            <div className={styles.resultsContainer}>
                <ul className={styles.results}>
                    {searchResults.map((product) => <Link to="/pdp" state={{ product }} onClick={() => setSearchResults([])}>
                        <li className={styles.res}>
                            <img className={styles.img} src={product.images[0]}/>
                            {product.title}
                        </li>
                    </Link>)}
                </ul>

            </div>
        )}
        </div>
    )
}
const items =[
    {title: "Home", href:"/", visibility:false},
    {title: "Contact", href:"/contact", visibility:true},
    {title: "About", href:"/about" , visibility:true},
    {title: "Sign Up", href:"/signup" , visibility:true},
]


const Header = ({ setLoggedin, loggedin, onMenuClick }) => {
    const profileItems = [
    // {icon: user,
    //     title: "Manage My Account"
    // },{icon: myOrder,
    //     title: "My Order"
    // },{icon: cancle,
    //     title: "My Canslations"
    // },{icon: rating,
    //     title: "My Reviews"
    // },
    {icon: logout,
        title: "Log Out",
        rout:handleLogOut,
    },
    ]
    function handleLogOut(){
        console.log("pressed")
        setLoggedin(false);
        navigate('/');
    }
    const[opened, setOpned] = useState(false);
    function handleOpenProfile() {
        setOpned(!opened);
    }

    return(
        <nav className={styles.mainNav}>
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">
                <h2 lassName={styles.title}>Exclusive</h2>
            </Link>
            
            <ul className={styles.items}>
                <li id={styles.burger} className={styles.item} onClick={onMenuClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </li>
                
                {items.map(item => (
                    <li className={styles.item}>
                        <Link to={item.href} className={styles.link}>{item.title}</Link>
                    </li>))}
            </ul>
            
            <ul className={styles.icons}>
                <li><Search/></li>
                {loggedin &&  <> <li className={styles.icon}>
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </li>
                <li className={styles.icon}>
                    <Link to="/cart"><svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 5H7L10 22H26" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></Link>
                </li>
                <li onClick={handleOpenProfile} className={styles.icon}>
                   <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="16" fill="#DB4444"/>
                        <path d="M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </li>
                {opened && <ul className={styles.profileDropDowns}> 
                    {profileItems.map((item => <li onClick ={item.rout} className={styles.profileItem}>
                        <img src ={item.icon} className={styles.profileImg}/>
                        <p className={styles.title}>{item.title}</p>
                    </li>))}
                </ul>}
            </>}

                
            </ul>
        </nav>
        
    )
}

export default memo(Header);