function ResolutionOptions( {price4k, price2k})
{
    return(
        <div className="ShopBuyResOptions">
                

                <div className="bulletinfocontainer">
            <div className="bulletinfocontainertitle">
            <input className="radio_button" type="radio" name="option"  value="Opción 1"/>
            <h4>2k & 60fps - <span className="colorP">{price2k}</span></h4>
            </div>
         
            <p>-Your Custom 3D Introduction will be exported in 2K [2560x1440p] & 60 FPS</p>
            

            <div className="bulletinfocontainertitle">
            <input className="radio_button" type="radio" name="option"  value="Opción 1"/>
            <h4>4k & 60fps - <span className="colorP">{price4k}</span></h4>
            </div>
         
            <p>-Your Custom 3D Introduction will be exported in 4K [3840x2160p] & 60 FPS</p>
        
            
           
                </div>
            </div>
    );
}

export default ResolutionOptions;