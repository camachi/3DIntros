import {useLocation } from "react-router-dom";
function receipt()
{   const location = useLocation();
    const productos = location.state?.productos || [];
    const data = location.state?.data || [];
    console.log(productos);
    console.log(data);
    return(
        <div className="receipt-div">
            <div className="receipt-titulo"><h1>✅Payment successfully order details:</h1></div>
    {productos.map((datos,index) => {
    
    
        return (
                <div className="recibo" key={index}>
                <div className="recibo-order-num"><h4>Order: {index + 1}</h4></div>
                <h1>{datos.titulo}</h1>
                <h4>{datos.resolution}</h4>
                {data.names?.[index] && <h2>Name: {data.names[index]}</h2>}
                {data.songs?.[index] && <h2>Song: {data.songs[index]}</h2>}
                {data.colors?.[index] && <h2>Color: {data.colors[index]}</h2>}
                {data.materials?.[index] && <h2>Material: {data.materials[index]}</h2>}
                {data.styles?.[index] && <h2>Styles: {data.styles[index]}</h2>}
                


                </div>
                );
                            })}
            
            
        </div>
    )
}

export default receipt;