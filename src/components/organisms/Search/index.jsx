import React, { useState }from "react";
import { Input } from "../../atoms/Input";
import { Movies } from "../../molecules";
import data from "./data";
import "./app.css";


export const Search = () =>{

    const [filter, setFilter] = useState("one");

  
    const handleInputChange = (e) => {
      
      setFilter(e.target.value);
    };

    return(
        <>
        <section>

            <div className="container">
            <div className="input">
                <Input className="in-0" onChange={handleInputChange}/>
            </div>
                    <div className="mt-5">
                    {data
                        .filter((elem) =>
                        elem.Title.toLowerCase().includes(filter.toLowerCase())
                        )
                        .map((elem, idx) => {
                        return <Movies key={idx} img={elem.Poster} title={elem.Title} />;
                        })}
                    </div>
            </div>
        </section>
        </>
    )
}