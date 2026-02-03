import styles from "./Category.module.css";
import useFetchCategories from "../CategoryList";
import Skeleton from "../Skeleton";
// icons

function CategorySkeleton(){
    return(
        <div className="flex flex-wrap gap-10 justify-center mt-10">
        {Array.from({ length: 5 }).map((_, i) => (
            <div
                key={i}
                className="w-[200px] max-[600px]:w-[100px] border rounded p-5 flex flex-col items-center gap-5"
            >
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-4 w-24" />
            </div>
        ))}
        </div>
    )
}

export default function Category(){
    const { categories } = useFetchCategories();
    console.log(categories);
    if(!categories || categories.length === 0) return(<CategorySkeleton/>);

    return(
        <div className="flex justify-between gap-10 mt-10 flex-wrap max-[600px]:justify-center">
            {categories.map((category, index) => 
                <div
                    key={index}
                    className="
                        group
                        w-[200px] max-[600px]:w-[100px]
                        border border-black rounded
                        p-5
                        flex flex-col items-center justify-center gap-5
                        cursor-pointer
                        transition-all duration-300
                        hover:bg-red-500 hover:border-red-500
                    "
                >
                    {category.logoURL && <img
                        src={category.logoURL}
                        alt={category.name}
                        className="
                            h-10
                            transition duration-300
                            group-hover:brightness-0 group-hover:invert
                        "
                    />}
                <p
                    className="
                    text-center
                    font-medium
                    leading-tight
                    transition duration-300
                    group-hover:text-white
                    "
                >{category.name}</p>
            </div>)}
        </div>
    )
}