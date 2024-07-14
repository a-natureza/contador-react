import React from "react";
import "./App.css";
import Contador from "./Contador";

export default function App() {
    return (
        <div className="app">
            <h1>Dois Contadores</h1>
            <div className="contadores">
                <Contador titulo="Contador 1" valorInicial={0} />
                <Contador titulo="Contador 2" valorInicial={10} />
            </div>
        </div>
    );
}