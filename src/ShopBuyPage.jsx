import { useParams } from "react-router-dom";
import { useState } from "react";
import VideoCard from "./VideoCard";
import ResolutionOptions from "./ResolutionOptions";
import IntroOptions from "./IntroOptions";
import ShopDetails from "./ShopDetails";
import emailIcon from "./fotos/email.png";
import discordIcon from "./fotos/discord.png";
function ShopBuyPage()
{   const { id } = useParams();
    const products = [
        { id: 1, video: "https://www.youtube.com/embed/_sFZV60Gqpg?si=KGybIAEa9JXYFvgO", titulo: "MultyStyle Intro", descripcion: "Please contact me to discuss more complex details for your intro.", price2k: "30$", price4k: "35$" , features: ["A Song of your choice*", "Name of your choice*", "Materials of your choice*" , "Colors of your choice*"], details: ["Intros will only use Text up to 20 letters at max.*", "The Intro will be 1 minute at max.*" , "The Choice of Material can be one of the following: Grunge/Stone, Plastic, Reflective, Glass or Mystery [I will choose the Material if Mystery is chosen]*"]},
        { id: 2, video: "https://www.youtube.com/embed/vwAyAS8oc8Y?si=PPoR4BLq9WoiuRbB" , titulo: "3D Custom Intro", descripcion: "Please contact me to discuss more complex details for your intro.", price2k: "10$", price4k: "15$", features: ["A Song of your choice*", "Name of your choice*", "Material of your choice*", "Color of your choice*"] , details: ["Intros will only use Text up to 20 letters at max.*", "The Intro will be 20 seconds at max.*" , "The Choice of Material can be one of the following: Grunge/Stone, Plastic, Reflective, Glass or Mystery [I will choose the Material if Mystery is chosen]*"]  },
        { id: 3, video: "https://www.youtube.com/embed/WRpXJzP3dCc?si=iRLLyNUdlTfVDYo4" , titulo: "Mystery Intro", descripcion: "Please contact me to discuss more complex details for your intro.", price2k: "5$", price4k: "10$", features: ["A Song of your choice*", "Name of your choice*"] , details: ["Intros will only use Text up to 20 letters at max.*", "The Intro will be 15 seconds at max.*" , "The Choice of Material can be one of the following: Grunge/Stone, Plastic, Reflective, Glass or Mystery [I will choose the Material if Mystery is chosen]*"]}
      ];
      const product = products.find((p) => p.id === parseInt(id));
    if (!product) {
        return <h2>Producto no encontrado</h2>;
    }
    return(
        <>
        <div className="ShopBuyContent">
            <div className="ShopBuyLeftContent">

                <VideoCard video1 = {product.video}></VideoCard>
            </div>

            <div className="ShopBuyRightContent">

            <div className="ShopBuyTitulo">
            <h1>{product.titulo}</h1>
            </div>
                <ResolutionOptions price2k = {product.price2k} price4k = {product.price4k}></ResolutionOptions>
            <div className="ShopBuyButtonsContainer">
            <button className="ShopBuyButtons">Add to Cart</button>
            <button className="ShopBuyButtons">Buy Now</button>
            </div>
            <div className="ShopBuyDescription">

            <IntroOptions titulo={product.titulo} list = {product.features}></IntroOptions>


            <ShopDetails list ={product.details}></ShopDetails>

                <div className="descriptiontitle">
                <h4>{product.descripcion}</h4>
                </div>

                <div className="descriptionbuttoncontainer">
                <button className="emailbutton">Email <img src={emailIcon} alt="email icon"></img></button>  
                <button className="discordbutton">Discord<img src={discordIcon} alt="email icon"></img></button>
                </div>

            </div>

            </div>
        </div>
        </>
    );
}

export default ShopBuyPage