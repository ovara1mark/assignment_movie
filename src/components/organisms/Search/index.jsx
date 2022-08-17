import React, { useState }from "react";
import { Input } from "../../atoms/Input";
import { Movies } from "../../molecules";
import data from "./data";
import "./app.css";


export const Search = () =>{

    const [filter, setFilter] = useState("");

  
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
                        <div className="gt">
                                {data
                                    .filter((elem) =>
                                    elem.Title.toLowerCase().includes(filter.toLowerCase())
                                    )
                                    .map((elem, idx) => {
                                    return <Movies className="gtx" key={idx} img={elem.Poster} title={elem.Title} />;
                                    })}                           
                        </div>
                    </div>
            </div>
            <div>
                
            </div>
        </section>
        </>
    )
}