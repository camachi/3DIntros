import { useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";



function PayPalButton({amount,products, formData}) {
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);
  useEffect(() => {
    const container = document.getElementById("paypal-button-container");
   
    
    
    if (container) {
      container.innerHTML = ""; 
    }

    if (window.paypal) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: { value: amount.toString() }
            }]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            
            console.log("✅ PAYMENT SUCCESSFUL");
            console.log("Payer email:", details.payer.email_address);
            console.log("Payer name:", details.payer.name.given_name, details.payer.name.surname);
            console.log("Order ID:", details.id);
            console.log("Amount:", details.purchase_units[0].amount.value);
            
            products.forEach((product, index) => {
            console.log(`Product ${index + 1}:`);
            console.log("  Title:", product.titulo);
            console.log("  Resolution:", product.resolution);
            console.log("  Price: $" + product.price + ".00"); })
            console.log("Data:")
            console.log("  Intro Names:", formData.names);
            console.log("  Intro Songs:", formData.songs);
            console.log("  Intro colors:", formData.colors);
            console.log("  Intro Materials:", formData.materials);
            console.log("  Intro Styles:", formData.styles);
          clearCart();
          navigate("/receipt", {
              state: {
              productos: products,
              data: formData
            }
          });

          });
          
        }
      }).render("#paypal-button-container");
    }
  }, [amount, products, formData]);

  return <div id="paypal-button-container"></div>;
}

export default PayPalButton;

