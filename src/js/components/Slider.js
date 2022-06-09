import '../../css/Slider.css'
function Slider(){
    return(
        <div className="slider">
            <div
                className='slider__background'
            ></div>
            <button className='previous'></button>
            <div className='movie-info'>
                <h2 className='movie-title'>Movie title</h2>
                <p className='movie-description'>Movie Description</p>
            </div>
            <button className='next'></button>
           <div className='slider__pointers'>
               <div className='slider__pointer'>

               </div>
               <div className='slider__pointer'>
                   
                   </div>
                   <div className='slider__pointer'>
                   
                   </div>
                   <div className='slider__pointer'>
                   
                   </div>
            </div>  
        </div>
    )
}
export default Slider;