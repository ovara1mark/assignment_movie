import React from "react";
import { Text } from "../../atoms";
import "./app.css"

export const Movies = ({className, img, title }) => {
    return (
      <div className="movie">
        <div className="img-container">
          <img className={className} src={img} alt={title} />
        </div>
        <Text className="title">{title}</Text>
      </div>
    );
  };
  