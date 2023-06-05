import React from "react";
import "./Header.css";
import { Button } from "antd";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">Work In Israel</div>
      <Button
        size={"large"}
        style={{ fontWeight: "700" }}
        href="https://docs.google.com/forms/d/e/1FAIpQLSeKYZPq7USUETpGne2pxOvdH23b7SQMK4EpNE1IjG93UrSKig/viewform?embedded=true"
      >
        Оставить заявку
      </Button>
    </header>
  );
}
