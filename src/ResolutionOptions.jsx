import { useState} from "react";
import { CartContext } from "./CartContext";
import React, { useContext } from 'react';
import Alert from "./Alert";
function ResolutionOptions( {price4k, price2k, titulo})
{   const { addToCart } = useContext(CartContext);
    const [selectedPrice, setSelectedPrice] = useState({ resolution: "2k & 60fps", price: price2k });  
    const [mensaje, setMensaje] = useState({text: "" , id: 0});  
    return(
        <>
        <div className="ShopBuyResOptions">
                

                <div className="bulletinfocontainer">
            <div className="bulletinfocontainertitle">
            <input className="radio_button" type="radio" name="resolution" value={price2k} checked={selectedPrice.price === price2k} onChange={() => setSelectedPrice({price: price2k, resolution: "2k & 60fps"})} />
            <h4>2k & 60fps - <span className="colorP">${price2k},00</span></h4>
            </div>
         
            <p>-Your Custom 3D Introduction will be exported in 2K [2560x1440p] & 60 FPS</p>
            

            <div className="bulletinfocontainertitle">
            <input className="radio_button" type="radio" name="resolution"  value={price4k}  checked={selectedPrice.price === price4k}  onChange={() => setSelectedPrice({price: price4k, resolution: "4k & 60fps"})}   />
            <h4>4k & 60fps - <span className="colorP">${price4k},00</span></h4>
            </div>
         
            <p>-Your Custom 3D Introduction will be exported in 4K [3840x2160p] & 60 FPS</p>
        
            
           
                </div>
            </div>

            <div className="ShopBuyButtonsContainer">
            <button onClick={() => {setMensaje({ text: "Item Added to cart!", id: Date.now() }); addToCart({ titulo, price: selectedPrice.price, resolution: selectedPrice.resolution })}} className="ShopBuyButtons" >Add to Cart</button>
            <Alert info={mensaje}></Alert>
            <button className="ShopBuyButtons">Buy Now</button>
            </div>
            </>
    );
}

export default ResolutionOptions;