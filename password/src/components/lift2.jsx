

function Enter({useLift}){

    return(
        <div>
<input onChange={
    (e)=>useLift((e.target.value))} type="text" placeholder="Enter Something" />
        </div>
    )
}


export default Enter