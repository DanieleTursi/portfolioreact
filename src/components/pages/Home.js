import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";

const Home=()=>{
  const PLinks=['<li>','</li>']
  const OpenCloseTags=['<ul>','</ul>']
  const navigate=useNavigate()
  const navigateTo = (path) => {
    navigate(path);
  };
    return(
      <MainWrap>
       <WrapLinks>
          <OpenClose>{OpenCloseTags[0]}</OpenClose>
            <Links onClick={() => navigateTo("/aboutme")}> {PLinks[0]} <a>ABOUT ME</a> {PLinks[1]}</Links>
            <Links onClick={() => navigateTo("/skills")}> {PLinks[0]} <a>SKILLS</a> {PLinks[1]}</Links>
            <Links onClick={() => navigateTo("/projects")}> {PLinks[0]} <a>PROJECTS</a> {PLinks[1]}</Links>
            <Links onClick={() => navigateTo("/contact")}> {PLinks[0]} <a>CONTACT</a> {PLinks[1]}</Links>
          <OpenClose>{OpenCloseTags[1]}</OpenClose>
       </WrapLinks>
      </MainWrap>
    )
}

export default Home;

const MainWrap=styled.div`
   width:100vw;
   height:100vh;
   background:black;
   font-family: Monaco;
   display:flex;
   flex-direction: column;
   justify-content:center;
`

const WrapLinks=styled.div`
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:flex-start;
`

const Links = styled.div`
     font-size:1.5vw;
     color:white;
     margin-left:38vw;
    
     a{
     cursor:pointer;
     font-weight:bold;
     font-size:3vw;
     transition: text-shadow 0.5s,color 0.5s;

     &:hover{
      text-shadow:0 0 10px white;
      color:red;
     }
     }

     @media screen and (max-width: 768px){
      font-size:4vw;
      margin-left:15vw;
      a{
     cursor:pointer;
     font-weight:bold;
     font-size:8vw;

     &:hover{
      text-shadow:0 0 10px white;
     }
      }
    }  
`

const OpenClose = styled.div`
     font-size:1.5vw;
     color:white;
     align-self:flex-start;
     margin-left:35vw;

     @media screen and (max-width: 768px){
      font-size:4vw;
      margin-left:10vw;
    }  
`

