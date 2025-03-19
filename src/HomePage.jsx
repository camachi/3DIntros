import logo from "./fotos/intrologo.png";
import { Link } from "react-router-dom";
function HomePage()
{
    return(
        <div className="Home">
            <div className="HomeContent">
            
            <img className="logohome" src={logo} ></img>
            <p>Our intros are crafted to provide a visually stunning experience that grabs attention and leaves a lasting impression. Whether you're promoting a business, event, or product, we create tailored intros that seamlessly blend creativity and professionalism.</p>
            <Link to="/shop" className="HomeButton">Buy Now</Link>
            
            </div>
        </div>
    );
}

export default HomePage;