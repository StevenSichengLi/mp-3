import styled from "styled-components";

const PageWrapper = styled.div`
    min-height: 100vh;`
;

const ImgWrapper = styled.img`
    width: 80vw;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
`;

export default function HelloThere() {
    return (
        <PageWrapper>
            <title>Hello There | Resume</title>
            <main>
                <div>
                    <h1>Hey, you found me! Wasn't expecting ppl to click on it.</h1>
                    <ImgWrapper src="/oh-hello-there-594797.jpg" alt="Hello there" />
                </div>
            </main>
        </PageWrapper>
    );
}
