
const ForYouList = (props) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for(let index = 1; index <= digit; index++){
          thumbnails.push(comp);
        }
        return thumbnails;
    }
    return (
        <div className="foryou-list">
            <h3 className="foryou-list__title">For You</h3>
            <div className="foryou-list__thumbnails">
                {loopComp(
                    ( <div className="foryou-list__thumbnail">
                     <image 
                      src="https://www.denofgeek.com/wp-content/uploads/2016/02/fast-9-poster-cast-universal.jpg?fit=1200%2C680"
                     />
                     <div className="foryou-list__top-layer">
                         <i className="fas fa-play" />
                     </div>
                     </div>), 10
                )}
            </div>
        </div>
    )
}
export default ForYouList;