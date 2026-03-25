import { Button, Form, Surface,Description, FieldError, Input, Label, TextField } from "@heroui/react";
import { Route, Routes } from "react-router-dom";
import { ThemeSwitch } from "./components/theme-switch";
import ParamSelector from "./components/ParamSelector";
import Navbar from "./components/Navbar"



function App() {
  return (
    <>
    <Navbar></Navbar>
    <ParamSelector></ParamSelector>
    </>
  );
}

export default App;
