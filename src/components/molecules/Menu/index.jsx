import React from "react";
import { Text } from "../../atoms";
import "./app.css"

export const Menu = () =>{
    return(
        <div className="menu">
        <Text className="list-items ">Home</Text>
        <Text className="list-items ">Themes</Text>
        <Text className="list-items ">Products</Text>
        <Text className="list-items ">Abouts</Text>
        <Text className="list-items ">Contact Us</Text>
        </div>
    )
}

