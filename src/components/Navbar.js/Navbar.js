import React,{useState,useEffect} from "react";
import styled, { keyframes } from "styled-components"
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';
import {IoMdClose} from 'react-icons/io';

const Navbar=()=>{
    const [isMobile, setIsMobile] = useState(false)
    const [hambOpen,setHambOpen]=useState(false)
    const [activeLink, setActiveLink] = useState("");
    const style = { color: "white", marginRight: "15px", fontSize: "30px" }
    const navigate=useNavigate()

    const handleResize = () => {
      if (window.innerWidth < 720) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
    }
    
    // create an event listener
    useEffect(() => {
      window.addEventListener("resize", handleResize)
    })
    
    const navigateTo = (path) => {
      navigate(path);
    };
  
    useEffect(() => {
      handleResize();
      setActiveLink(window.location.pathname);
    }, []);
      

    return(
      !isMobile
        ? <MainWrap screen={isMobile}>
            <Links onClick={() => navigateTo("/")} active={activeLink === "/"}>home</Links>
            <Links onClick={() => navigateTo("/aboutme")} active={activeLink === "/aboutme"} >about me</Links>
            <Links onClick={() => navigateTo("/skills")} active={activeLink === "/skills"}>skills</Links>
            <Links onClick={() => navigateTo("/projects")} active={activeLink === "/projects"}>projects</Links>
            <Links onClick={() => navigateTo("/contact")} active={activeLink === "/contact"}>contact</Links>
          </MainWrap>
        : <MainWrap>
           { !hambOpen
            ? <RxHamburgerMenu onClick={()=>setHambOpen(!hambOpen)} style={style}/>
            : <IoMdClose onClick={()=>setHambOpen(!hambOpen)} style={style}/>}
             {hambOpen
             ?<NavbarMobile>
                <Links onClick={() => navigateTo("/")} active={activeLink === "/"}>home</Links>
                <Links onClick={() => navigateTo("/aboutme")} active={activeLink === "/aboutme"} >about me</Links>
                <Links onClick={() => navigateTo("/skills")} active={activeLink === "/skills"}>skills</Links>
                <Links onClick={() => navigateTo("/projects")} active={activeLink === "/projects"}>projects</Links>
                <Links onClick={() => navigateTo("/contact")} active={activeLink === "/contact"}>contact</Links>
             </NavbarMobile>
             :<></>}
          </MainWrap>
    )
}

export default Navbar

const MainWrap=styled.div`
   width:100%;
   height:5vw;
   position:absolute;
   display:flex;
   flex-direction:${(props) => (props.screen ? "column" : "row")};
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
        font-size:4vw;
        padding-right:10px;
    }  
`

//Mobile

  const NavbarMobile=styled.div`
    width:100%;
    height:50vw;
    padding:20px 0;
    background:black;
    position:absolute;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    z-index:1;
    top:17vw;
  `