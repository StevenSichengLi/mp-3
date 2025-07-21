import { useState, useRef } from "react";

export function useCalculator() {
    const numOneRef = useRef<HTMLInputElement>(null);
    const numTwoRef = useRef<HTMLInputElement>(null);
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const clear = () => {
        if (numOneRef.current) numOneRef.current.value = "";
        if (numTwoRef.current) numTwoRef.current.value = "";
        setResult(null);
        setError(null);
    };

    const calculate = (op: string) => {
        setResult(null);
        setError(null);

        const a = Number(numOneRef.current?.value);
        const b = Number(numTwoRef.current?.value);

        if (isNaN(a) || isNaN(b)) {
            setError("Please enter valid numbers");
            return;
        }

        let res = 0;

        if (op === "+") {
            res = a + b;
        } else if (op === "-") {
            res = a - b;
        } else if (op === "*") {
            res = a * b;
        } else if (op === "/") {
            if (b === 0) {
                setError("Cannot divide by zero");
                return;
            }
            res = a / b;
        } else if (op === "**") {
            res = b >= 0 ? Math.pow(a, b) : 1 / Math.pow(a, -b);
        } else {
            setError("Invalid operator");
            return;
        }

        setResult(res.toString());
    };

    return {
        numOneRef,
        numTwoRef,
        result,
        error,
        calculate,
        clear,
    };
}
