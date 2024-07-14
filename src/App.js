import React from "react";
import "./App.css";
import Contador from "./Contador";

export default function App() {
    return (
        <div className="app">
            <h1>Dois Contadores</h1>
            <div className="contadores">
                <Contador />
                <Contador />
            </div>
        </div>
    );
}