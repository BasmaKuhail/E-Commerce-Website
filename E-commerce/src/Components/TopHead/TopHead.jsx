import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";

export default function TopHead(){
    const[opened, setOpned] = useState(false);

    function handleOpenLang() {
        setOpned(!opened);
    }
   
    return(
        <nav className="bg-black text-white font-poppins text-sm w-full sticky top-0 z-50">
            <div className="container mx-auto max-w-[1250px] flex items-center justify-between px-4 py-2">
                <ul className="hidden sm:flex items-center gap-4 flex-1 justify-center text-center">
                    <li className="font-light">
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    </li>
                    <li className="font-bold underline">
                        <a href="#" className="font-light">
                            Shop Now
                        </a>
                    </li>
                </ul>

                <div className="relative flex flex-col sm:flex-row sm:gap-4 cursor-pointer">
                    <ul
                        className="flex items-center gap-2"
                        onClick={handleOpenLang}
                    >
                        <li className="font-medium">English</li>
                        <li>
                            <svg
                                width="13"
                                height="8"
                                viewBox="0 0 13 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M6.36403 4.95L11.314 0L12.728 1.414L6.36403 7.778L2.67029e-05 1.414L1.41403 0L6.36403 4.95Z"
                                fill="white"
                                />
                            </svg>
                        </li>
                    </ul>
                    <AnimatePresence>
                        {opened && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full left-0 mt-2 bg-black shadow-md rounded-md py-2"
                        >
                            <a
                            href="#"
                            className="block px-4 py-1 hover:bg-gray-800 transition-colors duration-200"
                            >
                            Arabic
                            </a>
                        </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
}