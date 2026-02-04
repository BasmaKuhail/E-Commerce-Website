import { useState, useEffect } from "react";
import { Line } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import useFetchProductsByTagName from "../ProductByTagList";
import MainImgSkeleton from "./MainImageSkeleton";
import Img from "./Img";
import TextContent from "./TextContent";


export default function MainImg(){
    const [current, setCurrent] = useState(0);
    const { productsByTagName} = useFetchProductsByTagName("Best Seller");
    let currentProduct = productsByTagName?.[current];


    useEffect(() => {
        if (!productsByTagName?.length) return;

        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % productsByTagName.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [productsByTagName]);


    useEffect(() => {
        if (productsByTagName && productsByTagName.length > 0) {
            currentProduct = productsByTagName[0];
        setCurrent(0); // reset current dot
        }
    }, [productsByTagName]);


    {if(!productsByTagName || productsByTagName.length === 0){ 
        return(
            <MainImgSkeleton />
        );
    } }

    return(
        <div 
            className="
                bg-black text-white font-sans
                w-[900px] mt-12
                px-[35px] py-[35px] pl-[50px]
                sm:w-full sm:p-6
                flex flex-col "
        >
                {currentProduct && (
                <div
                    className="
                        flex flex-col
                        flex justify-between
                        h-[400px]
                        overflow-hidden
                        sm:flex-row sm:h-auto sm:items-center
                        "
                >
                    {(currentProduct) && <TextContent currentProduct={currentProduct} />}
                    {(currentProduct?.images) && <Img image={currentProduct.images}/>}

                </div>)}
                {/* Slider Dots */}
                <div className="flex justify-center gap-3 mt-6">
                {productsByTagName.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3.5 h-3.5 rounded-full border-2 transition
                        ${
                            current === index
                            ? "bg-red-500 border-red-500 scale-110"
                            : "bg-white/50 border-white hover:bg-red-500"
                        }`}
                        onClick={() => {
                            setCurrent(index);
                        }}
                    />
                ))}
                </div>
        </div>
    )}