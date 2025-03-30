import React from "react";
import { CartContext } from "./CartContext";
import { useContext,useState } from "react";
import InCartItem from "./InCartItem";
import Alert from "./Alert.jsx";

function CartPage()
{       const { cart } = useContext(CartContext);
        const [mensaje, setMensaje] = useState({text: "" , id: 0}); 
let total = 0;
cart.forEach((item) => {
  total += Number(item.price) || 0; 
});
    
   
    if (cart.length === 0) {
    return (
        <div className="CartDivContainer">

            <div className="ItemContainer">
            <div className="ItemTitleContainer">

            <h1>
                Your Cart
            </h1>

            </div>
            
            <h3>No items added to cart yet</h3>
            </div>
            
        </div>
    );
}


    return (
        <div className="CartDivContainer">
                <div className="ItemTitleContainer">

                    <h1>
                    Your Cart
                    </h1>

                  
                        
                    

                </div>

                <div className="ItemCartContainer">
                {cart.map((item, index) => (
                        
                         <InCartItem setMensaje={setMensaje}  id={item.id} key={index} titulo={item.titulo} precio={item.price} resolution={item.resolution}> </InCartItem>
                        ))}
                </div>
                <Alert info={mensaje}></Alert>
                <div className="TotalPriceDiv">
                <h3>Total</h3>
                <h3>${total},00</h3>
                </div>

                <div className="checkoutbuttondiv">
                <button className="chekoutbutton">Check Out</button>
                </div>
                
        </div>


      
    );
}

export default CartPage