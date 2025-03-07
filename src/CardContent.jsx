import { useNavigate } from "react-router-dom";
function CardContent( {titulo, description, id} )
{    const navigate = useNavigate();

    const pageClick = () =>{
        navigate(`/ShopPageBuy/${id}`);
    }
    return (
        <div className="CardContent">
            <div className="CardTitle">
            <h1>{titulo}</h1>
            </div>
            <div className="CardDiv">
            <p>{description}</p>
            
            </div>
            <div className="CardDiv">
            <button className="HomeButton" onClick={pageClick}>See More</button>
            </div>
        </div>
    );
}



export default CardContent