import React from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import InCartItem from "./InCartItem";

function CartPage()
{       const { cart } = useContext(CartContext);
   
    
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
                        
                         <InCartItem key={index} titulo={item.titulo} precio={item.price}> </InCartItem>
                        ))}
                </div>

                <button>Check Out</button>
        </div>


      
    );
}

export default CartPage