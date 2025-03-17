import { useState } from "react";

function VideoCard({list = [], images =[]})
{   const [video1,setVideos] = useState(list[0]);
    return(
        <div className="VideoCard">

                    <div className="VideoOptions">
                        {list.map((url,index)=>(
                            <button key={index} onClick={()=>setVideos(url)} className="VideoButton" style={{ backgroundImage: `url(${images[index]})`, backgroundSize: "cover", backgroundPosition: "center"}}>{index+1}</button>
                        ))}
                        
                        
                    </div>

                    <div className="Video">
                    <iframe width="100%" height="100%" src={video1} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                </div>
    );
}

export default VideoCard;