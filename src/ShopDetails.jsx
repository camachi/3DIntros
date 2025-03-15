function ShopDetails({list})
{
    return(
        <div className="ShopBuyDetailsContainer">
                <h4>What you should keep in mind before purchasing:</h4>
                <ul>
                {list.map((list, index) => (
            <li key={index}>{list}</li>
                ))}
                </ul>
            </div>
    );
}

export default ShopDetails;