import React from "react";
import {  Navbar } from "../../organisms";
import {Section} from "../../organisms";
import { Search } from "../../organisms/Search";

export const PageTemplate = () =>{
    return (
        <>
            <Navbar />
            <Section />
            <Search />

        </>
    )
}
