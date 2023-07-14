import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar.js/Navbar";

const Skills =()=>{
    const navigate=useNavigate();

    return(
     <MainWrap>
     <Navbar/>
        <h1>SKILLS</h1>
     </MainWrap>

    )
}

export default Skills

const MainWrap=styled.div`
   width:100vw;
   height:100vh;
   background:black;
   font-family: Monaco;
   display:flex;
   flex-direction: column;
   justify-content:center;
`