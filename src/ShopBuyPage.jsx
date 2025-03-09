import { useParams } from "react-router-dom";
import { useState } from "react";
function ShopBuyPage()
{   const { id } = useParams();
    const products = [
        { id: 1, video: "https://www.youtube.com/embed/_sFZV60Gqpg?si=KGybIAEa9JXYFvgO", titulo: "MultyStyle Intro", descripcion: "description...", price2k: "30$", price4k: "35$"},
        { id: 2, video: "https://www.youtube.com/embed/vwAyAS8oc8Y?si=PPoR4BLq9WoiuRbB" , titulo: "3D Custom Intro", descripcion: "description...", price2k: "10$", price4k: "15$"  },
        { id: 3, video: "https://www.youtube.com/embed/WRpXJzP3dCc?si=iRLLyNUdlTfVDYo4" , titulo: "Mystery Intro", descripcion: "description...", price2k: "5$", price4k: "10$"}
      ];
      const product = products.find((p) => p.id === parseInt(id));
    if (!product) {
        return <h2>Producto no encontrado</h2>;
    }
    return(
        <>
        <div className="ShopBuyContent">
            <div className="ShopBuyLeftContent">

                <div className="VideoCard">

                    <div className="VideoOptions">
                        <button className="VideoButton">tEST</button>
                        <button className="VideoButton">tEST</button>
                        <button className="VideoButton">tEST</button>
                        <button className="VideoButton">tEST</button>
                        
                    </div>

                    <div className="Video">
                    <iframe width="100%" height="100%" src={product.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                </div>
            </div>

            <div className="ShopBuyRightContent">

            <div className="ShopBuyTitulo">
            <h1>{product.titulo}</h1>
            </div>
            <div className="ShopBuyResOptions">
                <div className="bulletcontainer">
                    <div className="bulletsdiv">
                        <input type="radio" name="option"  value="Opción 1"/>
                    </div>

                    <div className="bulletsdiv">
                        <input type="radio" name="option"  value="Opción 1"/>
                    </div>
                </div>

                <div className="bulletinfocontainer">
            <label>
            <h4>2k & 60fps - <span className="colorP">{product.price2k}</span></h4>
            <p>Your Custom 3D Introduction will be exported in 2K [2560x1440p] & 60 FPS</p>
            </label>

            <label>
            <h4>4k & 60fps - <span className="colorP">{product.price4k}</span></h4>
            <p>Your Custom 3D Introduction will be exported in 4K [3840x2160p] & 60 FPS</p>
            </label>
                </div>
            </div>
            <div className="ShopBuyButtonsContainer">
            <button className="ShopBuyButtons">Add to Cart</button>
            <button className="ShopBuyButtons">Buy Now</button>
            </div>
            <div className="ShopBuyDescription">

            <div className="desIntroOptions">
            <h4>By purchasing a {product.titulo}, you can customize:</h4>
            <ul>
                <li>A Song of your choice*</li>
                <li>Name of your choice*</li>
                <li>Material of your choice*</li>
            </ul>
            </div>

            <p>{product.descripcion}</p>
            </div>

            </div>
        </div>
        </>
    );
}

export default ShopBuyPage