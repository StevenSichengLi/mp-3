import styled from "styled-components";

const StyledHome = styled.main`
    //padding: 0% 0% 1% 2%;
    width: 100%;
    height: 100vh;
    background-color: whitesmoke;
`;

const StyledIntro = styled.p`
    padding-top: 2%;
    padding-left: 2%;
`;

const StyledP = styled.p`
    padding-left: 4%;
`;

export default function Home() {
    return (
        <>
            <title>Home | Resume</title>
            <StyledHome>
                <h1>Home</h1>
                <StyledIntro>
                <h2>Steven Li</h2>
                    <StyledP>
                <p>This is my personal website showing my stuff. Welcome :)</p>
                <p>
                    I am a BU undergrad pursuing a dual degree in Painting and CS. I grew up in Shanghai
                    and moved to the US when I was 12. This is my first time learning web development and I am enjoying
                    it a lot
                    so far.
                    There is a list of categories where you can learn more about me.
                </p>
                    </StyledP>
                </StyledIntro>
            </StyledHome>
        </>
    );
}
