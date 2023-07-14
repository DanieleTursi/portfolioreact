import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";

const Navbar=()=>{
    const navigate=useNavigate()
    const navigateToHome=()=>{
        navigate('/')
    }
    const navigateToAboutme=()=>{
      navigate('/aboutme')
    }
    const navigateToSkills=()=>{
      navigate('/skills')
    }
    const navigateToProjects=()=>{
      navigate('/projects')
    }
    const navigateToContacts=()=>{
      navigate('/contacts')
    }

    return(
        <MainWrap>
        <Links onClick={navigateToHome}>home</Links>
        <Links onClick={navigateToAboutme}>about me</Links>
        <Links onClick={navigateToSkills}>skills</Links>
        <Links onClick={navigateToProjects}>projects</Links>
        <Links onClick={navigateToContacts}>contacts</Links>
        </MainWrap>
    )
}

export default Navbar

const MainWrap=styled.div`
   width:100%;
   height:5vw;
   position:absolute;
   display:flex;
   justify-content:flex-end;
   align-items:center;
   top:0;
   border-bottom:solid 2px white;

   @media screen and (max-width: 768px){
      height:10vw;
    }  
`

const Links = styled.div`
     font-size:1.5vw;
     color:white;
     ${'' /* text-transform:uppercase; */}
     padding-right:40px;
     cursor:pointer;
     font-weight:bold;
    

     &:hover{
        text-transform:uppercase;
      text-shadow:0 0 10px white;
     }

     @media screen and (max-width: 768px){
        font-size:2.2vw;
        padding-right:20px;
    }  
`