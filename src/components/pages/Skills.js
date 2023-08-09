import React, {useState} from "react";
import styled from "styled-components"
import {BiLogoHtml5, BiLogoCss3, BiLogoJavascript,BiLogoReact,BiLogoGithub,BiLogoMongodb} from 'react-icons/bi';
import {GrMysql} from 'react-icons/gr';


const Skills =()=>{
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768 ?true :false);
   const style = { color: "white", fontSize: window.innerWidth < 768 ? "50px" : "80px" }
   console.log(isMobile)
  
    return(
     <MainWrap isMobile={isMobile}>
        <SkillsWrap>
          <LogoWrap>
            <BiLogoHtml5 style={style}/>
            <h2>HTML</h2>
          </LogoWrap>
          <LogoWrap>
            <BiLogoCss3 style={style}/>
            <h2>CSS</h2>
          </LogoWrap>
          <LogoWrap>
            <BiLogoJavascript style={style}/>
            <h2>JavaScript</h2>
          </LogoWrap>
          <LogoWrap>
            <BiLogoReact style={style}/>
            <h2>React</h2>
          </LogoWrap>
          <LogoWrap>
            <BiLogoGithub style={style}/>
            <h2>GitHub</h2>
          </LogoWrap>
          <LogoWrap>
            <GrMysql style={style}/>
            <h2>MySQL</h2>
          </LogoWrap>
          <LogoWrap>
            <BiLogoMongodb style={style}/>
            <h2>MongoDB</h2>
          </LogoWrap>
        </SkillsWrap>
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
   h2{
      color:white;
      font-size:${(props=>props.isMobile ? "16px" :"22px")};
      ${'' /* text-transform:uppercase; */}
      margin:0;
   }
`

const SkillsWrap=styled.div`
   display:flex;
   justify-content:center;
   align-items:center;
   flex-wrap:wrap;
`

const LogoWrap=styled.div`
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   margin:15px;
   width:150px;

`