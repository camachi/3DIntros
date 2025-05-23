import IntroCard from "./IntroCard";
import CardContent from "./CardContent";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import image1 from "./fotos/BG.jpg";
import image2 from "./fotos/BG1.jpg";
import image3 from "./fotos/BG3.jpg";
function ShopPage()
{      const titulo1 = "Multistyle Intro🌝";
       const des1 = "A Multi-Style Intro features between 4 to 8 different intro styles, seamlessly blended with precise synchronization and a wide array of visual effects, creating a highly dynamic and engaging presentation.";
       const titulo2 = "Basic Intro🌚";
       const des2 = "Basic Intro follows a single consistent style, with precise synchronization and various visual effects.";
       const titulo3 = "Mystery Intro👻";
       const des3 = "A Mystery Intro can incorporate any style and materials, offering full creative flexibility. However, only the name and the music can be customized.";
    return (
        
        <div className="ShopHome">

        <div className="ShopContent">

        <div className="ShopL">
            <IntroCard imagen={image3}>

            </IntroCard>

            <CardContent titulo={titulo1} description={des1} id={1}>
            </CardContent>
        </div>

    
       <div className="ShopL">
            <IntroCard imagen={image1}>
            </IntroCard>
            
            <CardContent titulo={titulo2} description={des2} id={2}>
            </CardContent>
        
       </div>

       <div className="ShopL">
            <IntroCard imagen={image2}>
            </IntroCard>

            <CardContent titulo={titulo3} description={des3} id={3}>
            </CardContent>
        </div>

       
        
        </div>

        </div>
    
    );
}

export default ShopPage