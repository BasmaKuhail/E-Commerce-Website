import styles from "./Category.module.css";
import useFetchCategories from "../CategoryList";
// icons


export default function Category(){
    const { categories } = useFetchCategories();
    console.log(categories);
    if(!categories) return(<div>Loading...</div>);
    return(
        <div className={styles.Container}>
            {categories.map((category, index) => <div key={index} className={styles.category}>
                {category.icon && <img src={category.logoURL} className={styles.icon} alt={category.name} />}
                <p className={styles.title}>{category.name}</p>
            </div>)}
        </div>
    )
}
