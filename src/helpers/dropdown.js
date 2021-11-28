import React from 'react'

export let dropdownField = (fieldName, dataVar, dataSetter, dataVal) => {
    return (
        <div className="form-group"> 
            <label>{fieldName+": "} </label>
            <select value={dataVar} onChange={e => dataSetter(e.target.value)}>
                {dataVal.map((o) => (
                    <option value={o.value}>{o.value}</option>
                ))}
            </select>
        </div>
    )
}