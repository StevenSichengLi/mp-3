import { useState, useRef } from "react";

// custom calculator hook
export function useCalculator() {
    // numOneRef and numTwoRef are in direct communication with the html component equivalent
    const numOneRef = useRef<HTMLInputElement>(null);
    const numTwoRef = useRef<HTMLInputElement>(null);

    // state variables that were in the old calc code, have to restructure them here
    // initial value is set to null
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    // clears everything
    const clear = () => {
        if (numOneRef.current) numOneRef.current.value = "";
        if (numTwoRef.current) numTwoRef.current.value = "";
        setResult(null);
        setError(null);
    };

    //calculates based on the current op
    const calculate = (op: string) => {
        setResult(null);
        setError(null);

        // read in the numbers inputted by the user and convert them to actual numbers and assign them to a and b
        const a = Number(numOneRef.current?.value);
        const b = Number(numTwoRef.current?.value);

        // error handling (same logic)
        if (isNaN(a) || isNaN(b)) {
            setError("Please enter valid numbers");
            return;
        }

        // res to store result
        let res = 0;

        // computation
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
        }
        setResult(res.toString());
    };

    // new values
    return {
        numOneRef,
        numTwoRef,
        result,
        error,
        calculate,
        clear,
    };
}
