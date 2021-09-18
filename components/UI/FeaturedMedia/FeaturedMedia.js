
const FeaturedMedia = (props) => {
    return (
        <div className="featured-media">
            <iframe 
            className="featured-media__video"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/_qyw6LC5pnE?autoplay=1&loop=1&start=3"
            allow='accelerometer; autoplay; clipboard-write;
            encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen />

             
             <div className="featured-media__bg">
               <div className="featured-media__container">
                   <div className="featured-media__title">
                        Fast And Furious
                   </div>
                   <div className="featured-media__playing">
                        Now Playing
                   </div>
                   <div className="featured-media__location">
                        In theaters and on HBO MAX
                   </div>
                   <div className="featured-media__buttons">
                       <div className="featured-media__play-btn">
                       <i className="fas fa-play" />
                   </div>
                   <div className="featured-media__info-btn">
                        More Info
                   </div>
                   </div>
                </div> 
             </div>
        </div>
    )
}
export default FeaturedMedia;