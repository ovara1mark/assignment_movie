import React from "react";
import { Text } from "../../atoms";
import "./app.css"

export const Menu = () =>{
    return(
        <div className="menu">
        <Text className="list-items grey active">Home</Text>
        <Text className="list-items grey">Themes</Text>
        <Text className="list-items grey">Products</Text>
        <Text className="list-items grey">Abouts</Text>
        <Text className="list-items grey">Contact Us</Text>
        </div>
    )
}

