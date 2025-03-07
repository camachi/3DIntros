import React from "react";

function IntroCard({ imagen })
{
    return (
        
        <div className="IntroCard">
            <img src={imagen} alt="Image" className="IntroCardImage"/>
        </div>
        
    );
};

export default IntroCard;