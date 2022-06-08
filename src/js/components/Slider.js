import '../../css/Slider.css'
function Slider(){
    return(
        <div className="slider">
            <img
                className='slider__img'
                src="http://placeimg.com/640/480/any"
                alt='slider image'
            />
            <button className='previous'></button>
            <div className='movie-info'>
                <h2 className='movie-title'>Movie title</h2>
                <p className='movie-description'>Movie Description</p>
            </div>
            <button className='next'></button>    
        </div>
    )
}
export default Slider;