import Image from "./Image"
const ProductCart = ({allProducts}) => {
       return (
           <div>
           
            {allProducts.map(product => (
                   <div key={product.id}>
                      <Image
                        url = {product.urlImage}/>
                      <p>{product.precio}</p>
                    <p>{product.descripcion}</p>
                    <p>{product.cantidad}</p>
                   </div>    
            )
       
              )}
           </div>

)}

export default ProductCart;