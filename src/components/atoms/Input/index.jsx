import React from "react";

export const Input = ({label_sh, onChange}) =>{
    return(
        <label>
            <input className={label_sh}
             type="search" 
             onChange={onChange}/>
        </label>
    )
}