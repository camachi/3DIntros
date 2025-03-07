import { useParams } from "react-router-dom";
function ShopBuyPage()
{   const { id } = useParams();
    return(
        <>
        <div className="ShopBuyContent">
            <h1>Prueba {id} </h1>
        </div>
        </>
    );
}

export default ShopBuyPage