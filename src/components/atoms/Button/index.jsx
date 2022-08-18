import React from "react";

export const Button = ({icon, mv_icon, menuSlider})=>{
    const handleClick = () => menuSlider()
    return(
        <>
        <button
        className={mv_icon}
        onClick={handleClick}
        >
                {icon}
        </button>
        </>

    )
}

