import { useParams } from "react-router-dom";
import { useState } from "react";
import VideoCard from "./VideoCard";
import ResolutionOptions from "./ResolutionOptions";
import IntroOptions from "./IntroOptions";
import ShopDetails from "./ShopDetails";
import emailIcon from "./fotos/email.png";
import discordIcon from "./fotos/discord.png";
import { CartContext } from "./CartContext";
function ShopBuyPage()
{   const { id } = useParams();

    

    

    const products = [
        { id: 1, video: "https://www.youtube.com/embed/_sFZV60Gqpg?si=KGybIAEa9JXYFvgO", titulo: "MultyStyle Intro", descripcion: "Please contact me to discuss more complex details for your intro.", price2k: 30 , price4k: 35 , features: ["A Song of your choice*", "Name of your choice*", "Materials of your choice*" , "Colors of your choice*","How many styles you want (8 max)*"], details: ["Intros will only use Text up to 20 letters at max.*", "The Intro will be 1 minute at max.*" , "The Choice of Material can be one of the following: Grunge/Stone, Plastic, Reflective, Glass or Mystery [I will choose the Material if Mystery is chosen]*"]},
        { id: 2, video: "https://www.youtube.com/embed/vwAyAS8oc8Y?si=PPoR4BLq9WoiuRbB" , titulo: "Basic Intro", descripcion: "Please contact me to discuss more complex details for your intro.", price2k: 10, price4k: 15, features: ["A Song of your choice*", "Name of your choice*", "Material of your choice*", "Color of your choice*"] , details: ["Intros will only use Text up to 20 letters at max.*", "The Intro will be 20 seconds at max.*" , "The Choice of Material can be one of the following: Grunge/Stone, Plastic, Reflective, Glass or Mystery [I will choose the Material if Mystery is chosen]*"]  },
        { id: 3, video: "https://www.youtube.com/embed/WRpXJzP3dCc?si=iRLLyNUdlTfVDYo4" , titulo: "Mystery Intro", descripcion: "Please contact me to discuss more complex details for your intro.", price2k: 5, price4k: 10, features: ["A Song of your choice*", "Name of your choice*"] , details: ["Intros will only use Text up to 20 letters at max.*", "The Intro will be 15 seconds at max.*" , "The Choice of Material can be one of the following: Grunge/Stone, Plastic, Reflective, Glass or Mystery [I will choose the Material if Mystery is chosen]*"]}
      ];

      const urls = [
        {id:1 , links: ["https://www.youtube.com/embed/_sFZV60Gqpg?si=KGybIAEa9JXYFvgO","https://www.youtube.com/embed/Hl5cdl_nKIE?si=DYOt7c5Fo_HluSrF","https://www.youtube.com/embed/7vTtlepL00M?si=P5PzDgJpFcryMu_3", "https://www.youtube.com/embed/Ss0tK_CWoRg?si=mAQeGCC_C4xB1qMQ"] , images: ["https://img.youtube.com/vi/o5a82jpDzpM/0.jpg","https://img.youtube.com/vi/Hl5cdl_nKIE/0.jpg","https://img.youtube.com/vi/7vTtlepL00M/0.jpg","https://img.youtube.com/vi/Ss0tK_CWoRg/0.jpg"]},
        {id:2 , links: ["https://www.youtube.com/embed/hEwLXzcw-vY?si=v13g_8fpu4XWVUe7","https://www.youtube.com/embed/vwAyAS8oc8Y?si=PPoR4BLq9WoiuRbB","https://www.youtube.com/embed/QdgurtBy2ns?si=d_4Dl8aWdVZHSUsh", "https://www.youtube.com/embed/ENJggyQUiHE?si=QycXqC9HHBhWSr-3"]  , images: ["https://img.youtube.com/vi/hEwLXzcw-vY/0.jpg","https://img.youtube.com/vi/vwAyAS8oc8Y/0.jpg","https://img.youtube.com/vi/QdgurtBy2ns/0.jpg","https://img.youtube.com/vi/ENJggyQUiHE/0.jpg"]},
        {id:3 , links: ["https://www.youtube.com/embed/vI6MfXyIAmI?si=ihAxoeYlN6BkGvGv","https://www.youtube.com/embed/WRpXJzP3dCc?si=JtX_IERPMf_yw-yN","https://www.youtube.com/embed/QeDiguFGL3A?si=N1KVreeCfCXSWv_U","https://www.youtube.com/embed/Qdmb3_jKdfQ?si=orbMLRD_XNhoy5d3"]  , images: ["https://img.youtube.com/vi/vI6MfXyIAmI/0.jpg","https://img.youtube.com/vi/WRpXJzP3dCc/0.jpg","https://img.youtube.com/vi/QeDiguFGL3A/0.jpg","https://img.youtube.com/vi/Qdmb3_jKdfQ/0.jpg"]}
    ];
      const url = urls.find((p) => p.id === parseInt(id));
      const product = products.find((p) => p.id === parseInt(id));
    if (!product) {
        return <h2>Producto no encontrado</h2>;
    }
    return(
        
        <div className="ShopBuyContent">
            <div className="ShopBuyLeftContent">

                <VideoCard list = {url.links} images = {url.images}></VideoCard>
                
            </div>

            <div className="ShopBuyRightContent">

            <div className="ShopBuyTitulo">
            <h1>{product.titulo}</h1>
            </div>
                <ResolutionOptions price2k = {product.price2k} price4k = {product.price4k} titulo={product.titulo} ></ResolutionOptions>
            
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
       
    );
}

export default ShopBuyPage