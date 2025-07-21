import styled from "styled-components";
import {Link} from "react-router-dom";

const Main = styled.main`
    padding: 2%;
    min-height: 100vh;
`;

export default function Gol() {
    return (
        <>
            <title>Goals | Resume</title>
            <header>
                <h1>Goals</h1>
            </header>
            <Main>
                <h3>My goals for this class are:</h3>
                <ul>
                    <li>Learn how to implement fully functional and visually pleasing webpages</li>
                    <li>Learn how to use languages like HTML, js, CSS, etc.</li>
                    <li>Gain a general understanding of web development concepts and best practices</li>
                    <li>
                        (Hopefully)Acquire enough knowledge & skills that could help me create my own interactive
                        website where I could{" "}
                        <Link to="/proj.html">sell my own coffee</Link>
                    </li>
                </ul>
            </Main>
        </>
    );
}
