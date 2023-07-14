import React,{useState} from "react";
import styled, { keyframes } from "styled-components"
import { useNavigate } from "react-router-dom";

const Navbar=()=>{
    const [activeLink, setActiveLink] = useState("");
    const navigate=useNavigate()
    const navigateTo = (path) => {
        setActiveLink(path);
        navigate(path);
      };
    // const navigateToHome=()=>{
    //     navigate('/')
    // }
    // const navigateToAboutme=()=>{
    //   navigate('/aboutme')
    // }
    // const navigateToSkills=()=>{
    //   navigate('/skills')
    // }
    // const navigateToProjects=()=>{
    //   navigate('/projects')
    // }
    // const navigateToContacts=()=>{
    //   navigate('/contacts')
    // }

    return(
        <MainWrap>
        <Links onClick={() => navigateTo("/")} active={activeLink === "/"}>home</Links>
        <Links onClick={() => navigateTo("/aboutme")} active={activeLink === "/aboutme"} >about me</Links>
        <Links onClick={() => navigateTo("/skills")} active={activeLink === "/skills"}>skills</Links>
        <Links onClick={() => navigateTo("/projects")} active={activeLink === "/projects"}>projects</Links>
        <Links onClick={() => navigateTo("/contact")} active={activeLink === "/contact"}>contacts</Links>
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
      height:16vw;
    }  
`

const uppercaseAnimation = keyframes`
  from {
    text-transform: lowercase;
  }

  to {
    text-transform: uppercase;
  }
`;

const Links = styled.div`
     font-size:1.5vw;
     color:${(props) => (props.active ? "red" : "white")};
     transition: 2s;
     text-transform:${(props) => (props.active ? "uppercase" : "lowercase")};
     padding-right:40px;
     cursor:pointer;
     font-weight:bold;
     transition: text-shadow 0.5s,color 0.5,s text-transform 0.5s;
    

     &:hover{
        animation: ${uppercaseAnimation} 0.5s forwards;
        text-shadow:0 0 10px white;
        color:red;
     }

     &.active {
    text-transform: uppercase;
    color: red;
  }

     @media screen and (max-width: 768px){
        font-size:3vw;
        padding-right:10px;
    }  
`