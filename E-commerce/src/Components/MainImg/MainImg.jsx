import { useState, useEffect } from "react";
import { Line } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import useFetchProductsByTagName from "../ProductByTagList";

function MainImgSkeleton() {
  return (
    <div
      className="
        bg-black text-white
        w-[900px] mt-12
        px-[35px] py-[35px] pl-[50px]
        sm:w-[900px] sm:p-6
      "
    >
      <div className="flex justify-between h-[400px] sm:h-auto gap-4 sm:items-center">
        
        {/* Text skeleton */}
        <div className="flex flex-col gap-4 mx-10 w-1/2">
          <div className="h-4 w-3/4 bg-white/20 rounded animate-pulse" />
          <div className="h-8 w-full bg-white/20 rounded animate-pulse" />
          <div className="h-5 w-32 bg-white/20 rounded animate-pulse" />
        </div>

        {/* Image skeleton */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-[250px] h-[250px] bg-white/10 rounded-lg animate-pulse" />
        </div>

      </div>

      {/* Dots skeleton */}
      <div className="flex justify-center gap-3 mt-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="w-3.5 h-3.5 rounded-full bg-white/30 animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}


function Img({image}){
    return (<>
        <img 
            alt={image[0].altText} 
            src={image[0].imageURL}
            className="
                w-1/2
                m-2
                object-contain
                sm:w-auto sm:h-[45vh]"
                 
        />
    </>)
}
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
                    <ul className="flex flex-col justify-between h-[70%] mx-10">
                        <li className="text-lg opacity-80">
                            {currentProduct?.description}
                        </li>
                        {currentProduct.salePercentage > 0 && (
                            <li className="text-green-500 text-4xl font-semibold">{currentProduct.salePercentage}% OFF!</li>
                        )}
                        <li>
                            <p className="text-3xl font-medium w-[10ch] sm:w-full sm:text-4xl">
                                {currentProduct?.productName}
                        </p>
                        </li>
                        <Link 
                            state={{ currentProduct }} 
                            to={`/pdp`}
                            className="
                                flex items-center gap-5
                                underline
                                hover:text-red-500 transition
                                "
                        >
                            <li className="flex items-center gap-2">
                                <span>Shop Now</span>
                                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </li>
                        </Link>

                    </ul>
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