import { Link } from "react-router-dom";
import styled from "styled-components";

const PageWrapper = styled.div`
    min-height: 100vh;`
;
export default function Oops() {
    return (
        <>
            <PageWrapper>
            <title>Tech issue! | Resume</title>
            <div>
                <h1>Oops there is a tech issue... rerouting you to the home (actually) this time.</h1>
                <button>
                    <Link to="/">GO HOME!</Link>
                </button>
            </div>
            </PageWrapper>
        </>
    );
}