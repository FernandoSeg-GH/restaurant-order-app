import styles from "../styles/ProductList.module.css"
import ProductCard from "../components/ProductCard"

const ProdcutList = ({productList}) => {
    return ( 
        <div className={styles.container}>
            <h1 className={styles.title}>The Best Restaurant in Town</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore autem quidem voluptatibus ratione, necessitatibus suscipit iste id ea consequatur, impedit error explicabo minima eveniet dicta, nihil praesentium veritatis. Ratione, officia!
            </p>
            <div className={styles.wrapper}>
                {productList.map((product) => (
                    <ProductCard key={productList._id} product={product}/>   
                ))}
            </div>
        </div>
    )
}

export default ProdcutList