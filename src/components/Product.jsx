import AddButton from "./AddButton"
import Image from "./Image"
import styles from "./ProductList.module.css"

const Product = ({ product, AddProduct, allProduct }) => {

  let result = true;
  if (allProduct.find((item => item.id === product.id))) {
    if (allProduct.find((item => item.cantidad < product.cantidadDisponible))) {
         result = true
    }
    else {
         result = false;
    }
  }
  return (
    <div className={styles.galleryproducts} key={product.id}>
      <Image
        url={product.urlImage} />
      <div className={styles.infoProduct}>
        <h2>{product.nombre}</h2>
        <p className='precio'>{product.precio}</p>
        <div>
          {result ? (
            <AddButton
            product={product}
            AddProduct={AddProduct}
          />
          ) : (
            <p>Producto sin disponiblidiad</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default Product;