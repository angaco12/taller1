import styles from "./Image.module.css"
const Image = ({url}) => {
    return (
        <img className ={styles.image}
        src={url}/>
       
    );
}

export default Image;