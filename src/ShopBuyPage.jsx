import { useParams } from "react-router-dom";
function ShopBuyPage()
{   const { id } = useParams();
    const products = [
        { id: 1, video: "https://www.youtube.com/embed/_sFZV60Gqpg?si=KGybIAEa9JXYFvgO", titulo: "MultyStyle Intro", descripcion: "description..." },
        { id: 2, video: "url.." , titulo: "MultyStyle Intro", descripcion: ""  },
        { id: 3, video: "url.." , titulo: "MultyStyle Intro", descripcion: ""  }
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

            <div className="ShopBuyDescription">
            <p>{product.descripcion}</p>
            </div>

            </div>
        </div>
        </>
    );
}

export default ShopBuyPage