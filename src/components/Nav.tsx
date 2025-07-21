import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const StyledNav = styled.nav`
    padding: 15px;
    background-color: black;
    width: 50%;

    @media screen and (max-width: 1000px) {
        display: flex;
        width: 100%;
        padding: 1% 2%;
        justify-content: center;
    }
`;

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 1000px) {
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: nowrap;
        width: 100%;
    }
`;
const StyledLi = styled.li`
    margin-bottom: 12px;
    min-width: auto;
    
    @media screen and (max-width: 1000px) {
        min-width: 50px;
        flex: 1 1 auto;
        margin-bottom: 0;
        margin-right: 10px;
    }
`;

const StyledLink = styled(Link)<{ $active: boolean }>`

    // keeps track of which link is active, and change the background behind that link
    font-size: calc(2px + 1vw);
    color: ${({ $active }) => ($active ? "black" : "whitesmoke")};
    background-color: ${({ $active }) => ($active ? "white" : "transparent")};
    text-decoration: none;
    display: block;
    padding: 10px 100px 10px 10px;
    white-space: nowrap;
    flex-shrink: 1;
    min-width: 0;
    width: fit-content;

    &:hover {
      // a small fix for better readability, the old logic doesn't work here and the text will still show up yellow and it was hard to read
      color: ${({ $active }) => ($active ? "black" : "yellow")};
      text-decoration: underline;
      background-color: ${({ $active }) => ($active ? "white" : "transparent")};
  }
    @media screen and (max-width: 1000px) {
        padding: 3px 3px 3px 3px; 
    }
   
`;


export default function Nav() {
    //this lets the component know where it exactly it is
    // it compares the url link with whatever the "to" value is
    const location = useLocation();

        const links = [
            { path: "/", name: "Home" },
            { path: "/education.html", name: "Education" },
            { path: "/acc.html", name: "Accomplishments" },
            { path: "/gol.html", name: "Goals" },
            { path: "/skl.html", name: "Skills" },
            { path: "/exp.html", name: "Experiences" },
            { path: "/proj.html", name: "Projects" },
        ];

        return (
            <StyledNav>
                <StyledUl>
                    {links.map(({ path, name }) => (
                        <StyledLi key={path}>
                            <StyledLink to={path} $active={location.pathname === path}>
                                {name}
                            </StyledLink>
                        </StyledLi>
                    ))}
                </StyledUl>
            </StyledNav>
        );
    }