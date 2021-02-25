const CursForm = (props) => {
    return (
        <form onSubmit={props.fun_add_curse} className="formlist">
            <input type="text" placeholder="Enter Your Curse" required
                onChange={props.fun_update} id="name_curse" value={props.empty_current} />
            <button className="btn_add_curse">Add Curse</button>
        </form>
    )
}

export default CursForm;    