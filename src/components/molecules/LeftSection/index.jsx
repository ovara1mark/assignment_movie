import React from "react";
import { Text } from "../../atoms";
import { ReactComponent as IconMenu } from "../../../assets/line.svg";
import "./app.css";

export const LeftSection = ({type}) => {
    return (
        <>
        <div className="line-pg">
            <Text className="hd-line" type={"h1"}>Best Interior Design for your<br /> happy places</Text>
            <IconMenu className="text-line"/>
        </div>
        </>
    )
}