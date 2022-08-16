import React from "react"
import { LeftSection, RightSection } from "../../molecules"
import "./app.css"

export const Section = () =>{
    return (
        <>
        <div className="lft-rgt">
        <LeftSection />
        <RightSection />            
        </div>
        </>
    )
}