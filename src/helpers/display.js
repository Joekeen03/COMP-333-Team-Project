export let inputField = (dataName, dataVar, dataSetter) => {
    return (
        <div className="form-group"> 
            <label>{dataName+":"} </label>
            <input  
                type="text"
                required
                className="form-control"
                defaultValue={dataVar}
                onChange={(e) => {dataSetter(e.target.value)}}
                />
        </div>)
}
