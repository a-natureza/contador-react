import { useState } from "react";
import "./Contador.css";

export default function Contador({ titulo, valorInicial}) {
    const [numero, setNumero] = useState(valorInicial);

    function incrementar() {
        setNumero(numero + 1);
    }

    function decrementar() {
        setNumero(numero - 1);
    }

    return (
        <section className="contador">
            <h1>{titulo}</h1>
            <p className="numero">{numero}</p>
            <div className="botoes">
                <button onClick={incrementar} className="botao"> + </button>
                <button onClick={decrementar} className="botao"> - </button>
            </div>
        </section>
    );
}