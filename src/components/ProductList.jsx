import { products } from "./products";
import styles from "./ProductList.module.css"
import Product from "./Product"

const ProductList = ({ allProducts, setAllProducts, setTotal, total, countProducts, setCountProducts }) => {

    const AddProduct = product => {

            if (allProducts.find(item => item.id === product.id)) {
                if(allProducts.find(item => item.cantidad < item.cantidadDisponible)){
                    console.log("podemos comprar1");
                }
                const products = allProducts.map(item => item.id === product.id ? { ...item, cantidad: item.cantidad + 1 }
                    : item
                )
                setTotal(total + product.cantidad * product.precio)
                setCountProducts(countProducts + product.cantidad)
                return setAllProducts([...products])

            }
        
            setTotal(total + product.cantidad * product.precio)
            setAllProducts([...allProducts, product]);
            setCountProducts(countProducts + product.cantidad)
    }

    console.log(allProducts);


    return (
        <div className={styles.galleryproducts}>
            <div className={styles.containerItems} >
                {products.map(product => (
                    <div className={styles.galleryproducts} key={product.id}>
                        <Product
                            product={product}
                            AddProduct={AddProduct}
                            allProduct={allProducts}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList;