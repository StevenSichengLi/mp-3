import styled from "styled-components";

const Main = styled.main`
    padding: 2%;
    min-height: 100vh;
`;

export default function Skl() {
    return (
        <>
            <title>Skills | Resume</title>
            <header>
                <h1>Skills</h1>
            </header>
            <Main>
                <ul>
                    <li>
                        <strong>Coding & Programming:</strong>
                        <ul>
                            <li>Python</li>
                            <li>Java</li>
                            <li>C/C++</li>
                            <li>Shell scripting</li>
                            <li>Assembly (Intel x86)</li>
                            <li>Git</li>
                            <li>GoLang</li>
                            <li>OCaml</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Adobe Creative Suite:</strong>
                        <ul>
                            <li>Photoshop</li>
                            <li>After Effects</li>
                            <li>Premiere Pro</li>
                            <li>Illustrator</li>
                        </ul>
                    </li>
                    <li>
                        <strong>3D Modeling:</strong>
                        <ul>
                            <li>Autodesk Maya</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Specialty Coffee Knowledge:</strong>
                        <ul>
                            <li>Understanding of coffee processing methods</li>
                            <li>Familiarity with varietals and their flavor characteristics</li>
                            <li>Basic knowledge of coffee history and origin regions</li>
                            <li>Brewing methods and recipe development</li>
                            <li>Extraction science and water chemistry</li>
                            <li>Home roasting and cupping experience</li>
                            <li>Coffee packaging design</li>
                        </ul>
                    </li>
                </ul>
            </Main>
        </>
    );
}
