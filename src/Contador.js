import { useState } from "react";
import "./Contador.css";

export default function Contador() {
    const [numero, setNumero] = useState(0);

    function incrementar() {
        setNumero(numero + 1);
    }

    function decrementar() {
        setNumero(numero - 1);
    }

    return (
        <section className="contador">
            <h1>Contador</h1>
            <p className="numero">{numero}</p>
            <div className="botoes">
                <button onClick={incrementar} className="botao">Incrementar</button>
                <button onClick={decrementar} className="botao">Decrementar</button>
            </div>
        </section>
    );
}