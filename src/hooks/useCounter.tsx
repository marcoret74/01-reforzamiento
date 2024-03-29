import { useState } from "react";

export const useCounter = (inicial: number = 100) => {

    const [valor, setValor] = useState<number>(inicial);

    const acumular = (numero: number) => {
        setValor(valor + numero);
    }

    return {
        valor,
        acumular
    }

}