function CartPage({list})
{   if (!list || list.length === 0) {
    return (
        <div className="CartDivContainer">

            <div className="ItemContainer">
            <div className="ItemTitleContainer">

            <h1>
                Your Cart
            </h1>

            </div>
            
            <h3>No items added to cart yet</h3>
            </div>
            
        </div>
    );
}


    return (
        <div className="CartDivContainer">
                <div className="ItemTitleContainer">

                    <h1>
                    Your Cart
                    </h1>

                </div>
        </div>
    );
}

export default CartPage