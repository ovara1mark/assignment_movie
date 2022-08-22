import React, { useState } from "react";
import { Button } from "../../atoms";
import { Text } from "../../atoms";
import { Menu } from "../../molecules";
import { MenuBar } from "../../molecules";
import "./app.css";

export const Navbar = ({ icon, mv_icon, menuSlider, displayValue }) => {
  const [display, displayNone] = useState(true);
  const displayFunc = () => displayNone(!display);
  return (
    <>
      <nav>
        <div className="nav">
          <Text className="logo">Intecko Stodio</Text>
          <Menu />
          <Button
            menuSlider={displayFunc}
            mv_icon="icon"
            icon="&#x23AF;&#x23AF;&#x23AF;"
          />
        </div>
        <MenuBar displayValue={display} menuSlider={displayFunc} />
      </nav>
    </>
  );
};
