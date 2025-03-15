import logo from "./fotos/intrologo.png";

function HomePage()
{
    return(
        <div className="Home">
            <div className="HomeContent">
            
            <img className="logohome" src={logo} ></img>
            <p>Our intros are crafted to provide a visually stunning experience that grabs attention and leaves a lasting impression. Whether you're promoting a business, event, or product, we create tailored intros that seamlessly blend creativity and professionalism.</p>
            <button className="HomeButton">Buy Now</button>
            </div>
        </div>
    );
}

export default HomePage;