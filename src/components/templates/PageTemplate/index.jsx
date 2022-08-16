import React from "react";
import { Nabvar } from "../../organisms";
import {Section} from "../../organisms";
import { Search } from "../../organisms/Search";

export const PageTemplate = () =>{
    return (
        <header>
            <Nabvar />
            <Section />
            <Search />
        </header>
    )
}
