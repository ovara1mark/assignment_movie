import React from "react";
import { Button } from "../../atoms";
import { Text } from "../../atoms";
import "./app.css"
export const MenuBar = ({mv_icon, icon, displayValue, menuSlider}) =>{
    return(
        <div className={displayValue && "menubar"}>
            <div className="navMenu">
            <div className="btn">
            <Button mv_icon="icon" icon="X" menuSlider={menuSlider}/>                
            </div>

            <div className="d-flex">
            <Text className="list-items grey active">Home</Text>
            <Text className="list-items grey">Themes</Text>
            <Text className="list-items grey">Products</Text>
            <Text className="list-items grey">Abouts</Text>
            <Text className="list-items grey">Contact Us</Text>
            </div>                
            </div>

        </div>
    )
}