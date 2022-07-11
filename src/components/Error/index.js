import style from "./style.module.css"
function Error({error}){
    return(
        <div className={style["error"]}>
            <p className={style["error__message"]}>Error: {` ${error.error} ${error.description||"Failed to Fetch"}`}</p>
        </div>
    )
}
export default Error;