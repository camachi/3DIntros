import React from "react";
import imagen from './fotos/BG3.JPG';
function IntroCard()
{
    return (
        
        <div className="IntroCard">
            <img src={imagen} alt="Image" className="IntroCardImage"/>
        </div>
        
    );
};

export default IntroCard;