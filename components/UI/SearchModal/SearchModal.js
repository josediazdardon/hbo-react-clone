const SearchModal = (props) => {
    const loopComp = (comp, digit) => {
      let thumbnails = [];
      for (let index = 1; index <= digit; index++) {
        thumbnails.push(comp);
      }
      return thumbnails;
    };
    return (
      <div className="search-modal search-modal--active">
          <div className="search-modal__input-group ">
          <input type='text' className="search-modal__input"
            placeholder='search for a title' value=""/>
            <div className="search-modal__close-btn">
                <i className="fas fa-times" />
            </div>
          </div>
        <h3 className="search-modal__title">
            Popular Searches
        </h3>


        <div className="search-modal__thumbnails">
          {loopComp(
            <div className="search-modal__thumbnail">
              <img src="https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg" />
              <div className="search-modal__top-layer">
                <i className="fas fa-play" />
              </div>
            </div>,
            10
          )}
        </div>
      </div>
    );
  };
  
  export default SearchModal;
  