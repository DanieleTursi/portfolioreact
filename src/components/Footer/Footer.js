import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { BiCopyright,BiLogoGithub,BiLogoLinkedinSquare} from "react-icons/bi";



const Footer=()=>{
    const navigate=useNavigate();
const style = { color: "white", fontSize: "20px" }
const styleLogo = { color: "white", fontSize: "40px", cursor:"pointer", marginRight:"10px"}
const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

    return(
        <Wrap>
        <Copyright> DANIELE TURSI.{new Date().getFullYear()} <BiCopyright style={style}/></Copyright>
        <LogoWrap>
          <BiLogoLinkedinSquare onClick={() => openInNewTab("https://www.linkedin.com/in/daniele-tursi-78688372/")} style={styleLogo}/>
          <BiLogoGithub onClick={() => openInNewTab("https://github.com/DanieleTursi")} style={styleLogo}/>
        </LogoWrap>
     </Wrap>

    )
    }

    export default Footer

    const Wrap=styled.div`
   width:100%;
   height:5vw;
   position:absolute;
   bottom:0;
   border-top:solid 1px white;
   display:flex;
   justify-content:space-between;;
   align-items:center;
  
   @media screen and (max-width: 768px){
      height:20vw;
      flex-direction:column;
    } 
`

const LogoWrap=styled.div`
    width:150px;
`

const Copyright=styled.div`
   color:white;
   margin-left:20px;
   @media screen and (max-width: 768px){
      margin-top:10px;
    } 
`
