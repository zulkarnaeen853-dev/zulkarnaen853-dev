import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skill } from "./components/Skill";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skill />
      <Project />
      <Contact />
    </>
  );
}

export default App;
