import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: whitesmoke;
  margin-bottom: 1%;
  padding: 1%;
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>Steven Li</h1>
            <p>This is my personal website showing my stuff. Welcome :)</p>
        </StyledHeader>
    );
}
