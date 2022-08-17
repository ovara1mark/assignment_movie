import React from "react";

export const Input = ({label, className, onChange}) =>{
    return(
        <label htmlFor={label}>
            <input className={className}
             type="search" 
             onChange={onChange}/>
        </label>
    )
}