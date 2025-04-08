import { useLocation } from "react-router-dom";
import { useState } from "react";
import PayPalButton from "./PayPalButton";

function CheckoutPage() {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  const total = location.state?.total || 0;

  const [formData, setFormData] = useState({
    products: [],
    names: [],
    songs: [],
    resolutions: [],
    materials: [],
    styles: [],
    colors: [], // ✅ Agregado
  });

  const [showPaypal, setShowPaypal] = useState(false);
  const [error, setError] = useState("");

  // 🧠 Guardar el input dinámicamente
  const handleInputChange = (field, index, value) => {
    setFormData((prev) => {
      const updated = [...(prev[field] || [])];
      updated[index] = value;
      return { ...prev, [field]: updated };
    });
  };

  // ✅ Verificar que todos los campos requeridos estén llenos
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
      <h1>Checkout</h1>
      <p>Total: ${total},00</p>

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

      {/* 🔴 Mostrar error si algo falta */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* ✅ Confirmar inputs antes del pago */}
      <div className="botondepay">
        <button className="chekoutbutton" onClick={handleConfirmInfo}>
          Confirm Info
        </button>
      </div>

      {/* ✅ Solo mostrar PayPal si está listo */}
      {showPaypal && (
      <div className="paypal-overlay">
      <div className="paypal-modal">
      <h3>Complete Your Payment</h3>
      <PayPalButton amount={total} products={cartItems} formData={formData} />
      </div>
      </div>
      )}
    </div>
  );
}

export default CheckoutPage;

