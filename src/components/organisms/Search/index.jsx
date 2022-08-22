import React, { useEffect, useState, useRef } from "react";
import { Input } from "../../atoms/Input";
import { Movies } from "../../molecules";
// import data from "./data";
import "./app.css";

export const Search = () => {
  const [filters, setFilter] = useState([]);
  const [values, setValues] = useState("");

  const handleInputChange = (e) => {
    setValues(e.target.value);
  };

  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      async function getImage() {
        const images = await fetch(
          "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
        );
        const img = await images.json();
        return setFilter(img);
      }

      getImage();

      return () => {
        effectRan.current = true;
      };
    }
  });

  const func = () => {
    return filters
      .filter((elem) => elem.Title.toLowerCase().includes(values.toLowerCase()))
      .map((elem, idx) => {
        return (
          <Movies
            className="gtx"
            key={idx}
            img={elem.Poster}
            title={elem.Title}
          />
        );
      });
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="input">
            <Input className="in-0" onChange={handleInputChange} />
          </div>
          <div className="mt-5">
            <div className="gt">{func()}</div>
          </div>
        </div>
      </section>
    </>
  );
};
