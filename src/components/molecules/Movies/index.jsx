import React from "react";
import { Text } from "../../atoms";
import "./app.css"

export const Movies = ({ img, title }) => {
    return (
      <div className="movie">
        <div className="img-container">
          <img src={img} alt={title} />
        </div>
        <Text className="title">{title}</Text>
      </div>
    );
  };
  