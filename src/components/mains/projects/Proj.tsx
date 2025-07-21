import { useCalculator } from "./calculator.ts"; // adjust path if needed
import styled from "styled-components";

const Main = styled.main`
    padding: 2%;
    height: 100vh;
`;

const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 3%;
`;

const LeftColumn = styled.div``;

const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const Image = styled.img`
    max-width: 100%;
    padding-right: 1%;
    height: auto;
`;

const RightImage = styled.img`
    max-width: 43%;
    height: auto;
`;

const AfterImageText = styled.p`
    padding-bottom: 5%;
`;

const CalcWrapper = styled.div`
    text-align: center;
    background-color: aqua;
    width: 60%;
    margin: 0 auto;
    padding: 2% 0;
`;

const Input = styled.input`
    width: 40%;
    padding: 1%;
    box-sizing: border-box;
`;

const Button = styled.button`
    background-color: azure;
`;

const CalcButtons = styled.div`
    padding: 2% 1% 2% 1%;
`;

const Output = styled.h4`
    padding-top: 2%;
`;

const OutputNegative = styled.h4`
    color: red;
    padding-top: 2%;
`;

export default function Proj() {
    const {
        numOneRef,
        numTwoRef,
        result,
        error,
        calculate,
        clear,
    } = useCalculator();

    return (
        <>
            <title>Projects | Resume</title>
            <header>
                <h1>Projects</h1>
            </header>
            <Main>
                <h3>My Personal Website Project</h3>
                <ImgWrapper>
                    <LeftColumn>
                        <Image src="../../../public/CoffeePackagingPreview.jpg" alt="Packaging Design Preview" />
                    </LeftColumn>
                    <RightColumn>
                        <RightImage src="../../../public/untitled-32.jpg" alt="Packaging Prototypes #1" />
                        <RightImage src="../../../public/untitled-33.jpg" alt="Packaging Prototypes #2" />
                    </RightColumn>
                </ImgWrapper>
                <AfterImageText>
                    I am planning to build my own website using what I've learned in this class to sell my coffee.
                </AfterImageText>

                <h3>My Calculator Project</h3>
                <CalcWrapper>
                    <label>Give me a number: </label>
                    <Input ref={numOneRef} />
                    <CalcButtons>
                        <Button onClick={() => calculate("+")}>+</Button>
                        <Button onClick={() => calculate("-")}>-</Button>
                        <Button onClick={() => calculate("*")}>*</Button>
                        <Button onClick={() => calculate("/")}>/</Button>
                        <Button onClick={() => calculate("**")}>**</Button>
                    </CalcButtons>
                    <label>Give me a second number: </label>
                    <Input ref={numTwoRef} />
                    <Button onClick={clear}>Clear</Button>

                    {/*} && acts as a safety */}
                    {/*} renders the output based on their values (negative:red, positive:black) */}
                    {result && Number(result) < 0 ? (
                        <OutputNegative>{result}</OutputNegative>
                    ) : (
                        result && <Output>{result}</Output>
                    )}
                    {error && <OutputNegative>{error}</OutputNegative>}
                </CalcWrapper>
            </Main>
        </>
    );
}
