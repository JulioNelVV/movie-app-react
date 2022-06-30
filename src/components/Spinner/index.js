import style from './style.module.css'
function Spinner(){
    return(
        <div>
            <h2 className={style['spinner-title']}>Loading...</h2>
            <div className={style["spinner"]}></div>
        </div>
    )
}
export default Spinner;