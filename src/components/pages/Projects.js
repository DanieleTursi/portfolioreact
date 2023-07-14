import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar.js/Navbar";

const Projects =()=>{
    const navigate=useNavigate();

    return(
     <MainWrap>
        <Navbar/>
        <h1>PROJECTS</h1>
     </MainWrap>

    )
}

export default Projects

const MainWrap=styled.div`
   width:100vw;
   height:100vh;
   background:black;
   font-family: Monaco;
   display:flex;
   flex-direction: column;
   justify-content:center;
`