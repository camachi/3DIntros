import React, { useContext,useState } from "react";
import { CartContext } from "./CartContext"; 
import multy from "./fotos/BG3.jpg";
import basic from "./fotos/BG1.png";
import mystery from "./fotos/BG2.png";
import Alert from "./Alert.jsx";
function InCartItem({titulo, precio, resolution,id, setMensaje})
{   let imagen;
    
    const { removeFromCart } = useContext(CartContext);
    
    if(titulo.toLowerCase() === "multystyle intro")
    {
        imagen = multy;
    }
    else if(titulo.toLowerCase() === "basic intro")
    {
        imagen = basic;
    }
    else if(titulo.toLowerCase() === "mystery intro")
    {
        imagen = mystery;
    }

    

    return(
        <div className="ItemDivCartContainer">
            
            
            <div className="ItemImageDiv">
            <img src={imagen} alt={titulo} className="ItemImage"/>
            </div>
            

            <div className="ItemInfoDiv">
            
            <div className="ItemTituloDiv"> 
            <h3>{titulo}</h3>
            </div>
            
            <div className="ItemDescriptionDiv">
            <p>{resolution}</p>
            <h4>${precio},00</h4>
            </div>

            </div>
            
            
            
            <div className="ItemButtonDiv"> 
                <button onClick={() => {setMensaje({ text: "Item removed from cart!", id: Date.now() }); setTimeout(() => removeFromCart(id), 1000);}} className="ItemRemoveButton">Remove</button>
                
            </div>
        </div>
    );
}

export default InCartItem;