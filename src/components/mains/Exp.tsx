import styled from "styled-components";

const Main = styled.main`
    padding: 2%;
    min-height: 100vh;
`;

export default function Exp() {
    return (
        <>
            <title>Experiences | Resume</title>
            <header>
                <h1>Experiences</h1>
            </header>
            <Main>
                <h2>Work Experience</h2>
                <ul>
                    <li>
                        <strong>Machine Learning Intern</strong> | Intel – Shanghai (05/2024 – 08/2024)
                        <ul>
                            <li>Benchmarked local AI applications and optimized LLMs using Intel tooling.</li>
                            <li>Wrote technical blog posts and internal documentation for devs.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Tennis Coach</strong> | Xin Li – San Jose, CA (06/2021 – 08/2021)
                        <ul>
                            <li>Instructed beginners and organized a mini-tournament.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Art Teacher (Online)</strong> | SVCU – Cupertino, CA (06/2020 – 08/2020)
                        <ul>
                            <li>Taught character design to ~20 elementary students via Zoom.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Chinese School Volunteer</strong> | Enlighten Chinese School – San Jose, CA (06/2019 –
                        08/2019)
                        <ul>
                            <li>Supervised campers and coordinated group activities.</li>
                        </ul>
                    </li>
                </ul>
            </Main>
        </>
    );
}
