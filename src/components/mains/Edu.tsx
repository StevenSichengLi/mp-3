import styled from "styled-components";

const Main = styled.main`
    min-height: 100vh;
  padding: 2%;
`;

export default function Edu() {
    return (
        <>
            <title>Education | Resume</title>
            <header>
                <h1>Projects</h1>
            </header>
        <Main>
            <h2>Education and Training</h2>
            <ul>
                <li>
                    <strong>Boston University – College of Fine Arts</strong> – Boston, MA
                    <br />Bachelor of Fine Arts (BFA) in Painting, Expected in 01/2026
                </li>
                <li>
                    <strong>Boston University – College of Arts & Sciences</strong> – Boston, MA
                    <br />Bachelor of Arts (BA) in Computer Science, Expected in 01/2026
                </li>
            </ul>
        </Main>
            </>
    );
}
