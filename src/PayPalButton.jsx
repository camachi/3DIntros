import { useEffect } from "react";

function PayPalButton({ amount,onPaymentSuccess }) {
  useEffect(() => {
    if (window.paypal) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount.toString(), // monto a pagar
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            if (onPaymentSuccess) {
              onPaymentSuccess(details);
            }
            //alert("Pago completado por " + details.payer.name.given_name);
            console.log("✅ PAYMENT SUCCESSFUL");
            console.log("Payer email:", details.payer.email_address);
            console.log("Payer name:", details.payer.name.given_name, details.payer.name.surname);
            console.log("Order ID:", details.id);
            console.log("Amount:", details.purchase_units[0].amount.value);
            console.log("Product:")
          });
        },
        onError: (err) => {
          console.error("Error con PayPal:", err);
        }
      }).render("#paypal-button-container");
    }
  }, [amount]);

  return <div id="paypal-button-container"></div>;
}

export default PayPalButton;
