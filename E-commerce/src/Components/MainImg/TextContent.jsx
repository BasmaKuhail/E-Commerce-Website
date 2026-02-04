import { Link } from "react-router-dom";

export default function TextContent({currentProduct}){
    return(
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
    )
}