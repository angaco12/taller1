const AddButton = ({product, AddProduct}) => {
    return (
      <button onClick={() => AddProduct(product)}>Añadir al carrito</button>
    ); 
}
export default AddButton;