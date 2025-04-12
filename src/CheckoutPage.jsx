import { useLocation } from "react-router-dom";
import { useState } from "react";
import PayPalButton from "./PayPalButton";
import { useNavigate } from "react-router-dom";
function CheckoutPage() {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  const total = location.state?.total || 0;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    products: [],
    names: [],
    songs: [],
    resolutions: [],
    materials: [],
    styles: [],
    colors: [], 
  });

  const [showPaypal, setShowPaypal] = useState(false);
  const [error, setError] = useState("");

  
  const handleInputChange = (field, index, value) => {
    setFormData((prev) => {
      const updated = [...(prev[field] || [])];
      updated[index] = value;
      return { ...prev, [field]: updated };
    });
  };

  
  const handleConfirmInfo = () => {
    for (let i = 0; i < cartItems.length; i++) {
      const titulo = cartItems[i].titulo.toLowerCase();
      const isMystery = titulo === "mystery intro";

      if (
        !formData.names[i] ||
        !formData.songs[i] ||
        (!isMystery && (
          !formData.materials[i] ||
          !formData.colors[i] ||
          (titulo === "multystyle intro" && !formData.styles[i])
        ))
      ) {
        setError("Please fill out all required fields.");
        return;
      }
    }

    setError("");
    setShowPaypal(true);
    console.log("✅ Form data ready:", formData);
  };

  return (
    <div className="CheckoutContainer">
      
    <div className="checkoutpage-titulo"><h1>Provide Your Details 📄</h1></div>
      {cartItems.map((item, index) => {
        const titulo = item.titulo.toLowerCase();

        return (
          <div key={index} className="CheckoutItem">
            <h3>{item.titulo}</h3>
            <p>{item.resolution}</p>

            <input
              type="text"
              placeholder="Your Name"
              required
              onChange={(e) => handleInputChange("names", index, e.target.value)}
            />

            <input
              type="text"
              placeholder="Your Song"
              required
              onChange={(e) => handleInputChange("songs", index, e.target.value)}
            />

            {(titulo === "multystyle intro" || titulo === "basic intro") && (
              <>
                <input
                  type="text"
                  placeholder="Color"
                  required
                  onChange={(e) => handleInputChange("colors", index, e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Material"
                  required
                  onChange={(e) => handleInputChange("materials", index, e.target.value)}
                />
              </>
            )}

            {titulo === "multystyle intro" && (
              <input
                type="number"
                placeholder="How many styles (1-8)"
                required
                onChange={(e) => handleInputChange("styles", index, e.target.value)}
              />
            )}
          </div>
        );
      })}

     
     

      {/* ✅ Confirmar inputs antes del pago */}
      <div className="TotalPriceDiv">
      <h2>Checkout:</h2>
      <h3>${total},00</h3>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="botondepay">
        <button className="chekoutbutton" onClick={handleConfirmInfo}>
          Confirm Info
        </button>
      </div>

      {/* ✅ Solo mostrar PayPal si está listo */}
      {showPaypal && (
      <div className="paypal-overlay">
      <div className="paypal-modal">
      <div className="paypal-x"><a onClick={()=>navigate("/cart")}>X</a></div>
      <h3>Complete Your Payment</h3>
      <p>Test Account: intros3dtest@gmail.com - testtest</p>
      <PayPalButton amount={total} products={cartItems} formData={formData} />
      </div>
      </div>
      )}
    </div>
  );
}

export default CheckoutPage;

