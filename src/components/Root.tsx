import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import {Routes, Route} from "react-router";
import Home from "./mains/Home.tsx";
import Edu from "./mains/Edu.tsx";
import Acc from "./mains/Acc.tsx";
import Gol from "./mains/Gol.tsx";
import Skl from "./mains/Skl.tsx";
import Exp from "./mains/Exp.tsx";
import Proj from "./mains/projects/Proj.tsx";
import Hello from "../components/easter-eggs/Hello.tsx";
import Another from "../components/easter-eggs/Another.tsx";
import Oops from "../components/easter-eggs/Oops.tsx";
import styled from "styled-components";


const Wrapper = styled.div`
    width: 80vw;
    min-height: 100vh;
    margin: 0 auto;
    
    display: flex;
    flex-direction: row;
    background-color: whitesmoke;


    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;



const Content = styled.div`
    width: 75%;
    background-color: whitesmoke;
    color: black;
    padding: 1% 2%;
    display: flex;
    flex-direction: column;
`;

const NavColumn = styled.nav`
  width: 25%;
  min-width: 200px;
  background-color: black;

    @media screen and (max-width: 1000px) {
        width: 100%;
        min-width: unset;
    }
`;

const RightColumn = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;
export default function Root() {
    return (
        <Wrapper>
                <NavColumn>
                    <Nav/>
               </NavColumn>


                <RightColumn>
                    <Content>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/education.html" element={<Edu/>}/>
                            <Route path="/acc.html" element={<Acc/>}/>
                            <Route path="/gol.html" element={<Gol/>}/>
                            <Route path="/skl.html" element={<Skl/>}/>
                            <Route path="/exp.html" element={<Exp/>}/>
                            <Route path="/proj.html" element={<Proj/>}/>
                            <Route path="/credits.html" element={<Hello/>}/>
                            <Route path="/another-one.html" element={<Another/>}/>
                            <Route path="/oops.html" element={<Oops/>}/>
                        </Routes>
                    </Content>
                    <Footer/>
                </RightColumn>
        </Wrapper>
)
    ;
}
