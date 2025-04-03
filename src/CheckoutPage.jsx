import PayPalButton from "./PayPalButton";

function CheckoutPage() {

    const total = 35;
    const handlePaymentSuccess = (details) => {
        setPaymentInfo(details);
        alert("Payment completed by " + details.payer.name.given_name);
      };
  return (
    <div className="CheckoutContainer">
     <h1>Checkout</h1>
      <p>Total: ${total},00</p>
      <PayPalButton amount={total} />
    </div>
  );
}

export default CheckoutPage;