import { useState } from 'react'

const ShippingResumen = ({total}) => {
   
    const [coupun, setCoupun] = useState(0);

    const handleInput = ({target}) => {
        setCoupun(target.value)
    }
     console.log(coupun);
    return (
       <div>
        <p>Resume</p> 
        <label>Enter Coupon Code</label>
        <br></br>
        <input name="cupon" type="number" value={coupun} onChange={handleInput}/>
        <br></br>
        <label>Subtotal</label>
        <p>{total}</p>
        <label>Coupon</label>
        <p>{coupun}</p>
        <label>Total</label>
        <p>{total-coupun}</p>
       </div>
    );

}
export default ShippingResumen;