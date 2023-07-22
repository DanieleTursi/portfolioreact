import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar.js/Navbar";
import mycinema from "../../assets/images/mycinema.png";
import helpmechoose from "../../assets/images/helpmechoose.png";
import filmapp from "../../assets/images/FilmApp.png";
import tribute from "../../assets/images/tribute.png";

const Projects =()=>{
    const navigate=useNavigate();
    const openInNewTab = (url) => {
      window.open(url, "_blank", "noreferrer");
    };
    const Projects=[
      {link:"https://mycinema-omega.vercel.app",img:mycinema, alt:"mycinema proj", name:"MYCINEMA", lang:"React"},
      {link:"https://help-me-choose.vercel.app",img:helpmechoose,alt:"helpmechoose proj",name:"HelpMeChoose", lang:"HTML,CSS,JavaScript"},
      {link:"https://replit.com/@DanieleTursi/FilmApp?embed=true",img:filmapp,alt:"FilmApp proj",name:"FilmApp", lang:"Python,MySql"},
      {link:"https://williamkamkwamba.vercel.app",img:tribute,alt:"WilliamKamkwamba proj",name:"William Kamkwamba", lang:"HTML,CSS"}]

    return(
     <MainWrap>
        <Navbar/>
        <ProjectsWrap>
        {Projects.map((proj,idx)=>(
         <Project key={idx} onClick={() => openInNewTab(proj.link)}>
           <img src={proj.img} alt={proj.alt}/>
           <ProjName>{proj.name}</ProjName>
           <Code>{proj.lang}</Code>
         </Project>))}
         {/* <Project>
           <img src={helpmechoose} alt="mycinema project"/>
           <ProjName>HelpMeChoose</ProjName>
           <Code>HTML,CSS,JavaScript</Code>
         </Project> */}


        </ProjectsWrap>
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

const ProjectsWrap=styled.div`
  width:95%;
  margin-top:5vw;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;

  @media screen and (max-width: 768px){
       flex-direction:column;
     }
`

const Project=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:40%;

  img{
   width:300px;
   height:180px;
   border-radius:8px;
   margin-top:20px;

   @media screen and (max-width: 768px){
       width:200px;
       height:120px;
     }
  }
`

const ProjName=styled.h1`
   font-size:20px;
   margin: 20px 0 5px 0;
`

const Code=styled.h2`
   font-size:14px;
   margin: 5px 0 20px 0;
`