function VideoCard({video1})
{
    return(
        <div className="VideoCard">

                    <div className="VideoOptions">
                        <button className="VideoButton">tEST</button>
                        <button className="VideoButton">tEST</button>
                        <button className="VideoButton">tEST</button>
                        <button className="VideoButton">tEST</button>
                        
                    </div>

                    <div className="Video">
                    <iframe width="100%" height="100%" src={video1} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                </div>
    );
}

export default VideoCard;