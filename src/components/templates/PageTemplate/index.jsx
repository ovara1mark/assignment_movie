import React from "react";
import {  Navbar } from "../../organisms";
import {Section} from "../../organisms";
import { Search } from "../../organisms/Search";
// import Icon from "../../atoms/Icon";
import "./app.css";

export const PageTemplate = () =>{
    return (
        <>
            <Navbar />
            <Section />
            <Search />
            {/* <Icon className="icons-line" /> */}
        </>
    )
}
