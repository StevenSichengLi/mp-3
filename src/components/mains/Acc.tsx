import styled from "styled-components";

const Main = styled.main`
    padding: 2%;
    min-height: 100vh;
`;

export default function Acc() {
    return (
        <>
            <title>Accomplishments | Resume</title>
            <header>
                <h1>Accomplishments</h1>
            </header>
            <Main>
                <h3>My Accomplishments</h3>
                <ul>
                    <li>
                        <strong>Art@Sloane Exhibition</strong> – Boston University
                        <br/>
                        Selected artwork exhibited in the juried <em>Art@Sloane</em> show during Spring 2022 and Spring
                        2025.
                    </li>
                    <li>
                        <strong>Dean’s List</strong> – Boston University
                        <br/>
                        CAS: Fall 2024<br/>
                        CFA: Fall 2023, Fall 2022, Spring 2022
                    </li>
                </ul>
            </Main>
        </>
    );
}
