import React, { useState,useEffect } from "react";
import './index.css'

function Alert({info})
{    
      const [visible, setVisible] = useState("Alert");
      useEffect(() => { 
          if(info.text)
          {
            setVisible("Alert show");
            const timer = setTimeout(() =>{
               setVisible("Alert");
            },3000);

            return () => clearTimeout(timer);
          } 
        }, [info.id]);

        

     return(
        
        <div className={visible}>
         {info.text}
        </div>

     );
}

export default Alert;