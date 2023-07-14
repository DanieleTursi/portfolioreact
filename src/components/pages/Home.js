import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";

const Home=()=>{
  const PLinks=['<Links>','</Links>']
  const navigate=useNavigate()
  const navigateToAboutme=()=>{
    navigate('./aboutme')
  }
  const navigateToSkills=()=>{
    navigate('./skills')
  }
  const navigateToProjects=()=>{
    navigate('./projects')
  }
  const navigateToContacts=()=>{
    navigate('./contacts')
  }
    return(
      <MainWrap>
       <WrapLinks>
        <Links onClick={navigateToAboutme}> {PLinks[0]} <a>ABOUT ME</a> {PLinks[1]}</Links>
        <Links onClick={navigateToSkills}> {PLinks[0]} <a>SKILLS</a> {PLinks[1]}</Links>
        <Links onClick={navigateToProjects}> {PLinks[0]} <a>PROJECTS</a> {PLinks[1]}</Links>
        <Links onClick={navigateToContacts}> {PLinks[0]} <a>CONTACTS</a> {PLinks[1]}</Links>
        </WrapLinks>
        {/* <LinksText>Const Portfolio = styled.div`</LinksText>
        <LinksText2>  color : white;</LinksText2>
        <LinksText2>  font-size : 3rem;</LinksText2>
        <LinksText2>`</LinksText2> */}
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
   flex-direction: column;
   justify-content:center;
`

const Links = styled.div`
     font-size:1.5vw;
     color:white;

     a{
     cursor:pointer;
     font-weight:bold;
     font-size:3vw;

     &:hover{
      text-shadow:0 0 10px white;
     }
     }

     @media screen and (max-width: 768px){
      font-size:4vw;

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

const LinksText=styled.div`
   color:white;
   font-size:3vw;
   text-align:start;
   padding:30px 30px 0 400px;
   
   a{
     cursor:pointer;
     font-weight:bold;

     &:hover{
      text-shadow:0 0 10px white;
     }
   }
`
const LinksText2=styled.div`
   color:white;
   font-size:2rem;
   text-align:start;
   padding:10px 30px 0 450px;
   font-family: Monaco;
`

