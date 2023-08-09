import React,{useState,useEffect,useCallback} from "react";
import styled, { keyframes } from "styled-components"
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';
import logo from "../../assets/images/logo.png";
import {IoMdClose} from 'react-icons/io';

const Navbar=()=>{
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);
    const [hambOpen,setHambOpen]=useState(false)
    const [activeLink, setActiveLink] = useState("");
    const PLinks=['<li>','</li>']
    const OpenCloseTags=['<ul>','</ul>']
    const style = { color: "white", marginRight: "15px", fontSize: "30px" }
    const navigate=useNavigate()
    
  
    const handleWindowResize = useCallback(event => {
      console.log(window.innerWidth)
      setWindowSize(window.innerWidth);
  }, []);
  
  useEffect(() => {
      window.addEventListener('resize', handleWindowResize);
      return () => {
          window.removeEventListener('resize', handleWindowResize);
      };
  }, [handleWindowResize]);
    
    const navigateTo = (path) => {
      navigate(path);
    };

    const handleClick=(link)=>{
      setHambOpen(false) 
      navigateTo(link);
      setActiveLink(link);
        
    }

    if (window.location.pathname === "/"){
    return(
      <MainWrapHome>
       <WrapLinks>
          <OpenClose>{OpenCloseTags[0]}</OpenClose>
            <LinksHome onClick={() => handleClick("/aboutme")}> {PLinks[0]} <a>ABOUT ME</a> {PLinks[1]}</LinksHome>
            <LinksHome onClick={() => handleClick("/skills")}> {PLinks[0]} <a>SKILLS</a> {PLinks[1]}</LinksHome>
            <LinksHome onClick={() => handleClick("/projects")}> {PLinks[0]} <a>PROJECTS</a> {PLinks[1]}</LinksHome>
            <LinksHome onClick={() => handleClick("/contact")}> {PLinks[0]} <a>CONTACT</a> {PLinks[1]}</LinksHome>
          <OpenClose>{OpenCloseTags[1]}</OpenClose>
       </WrapLinks>
      </MainWrapHome>
    )}
      

  return(
      windowSize > 830
        ? <MainWrap screen={isMobile}>
            <Logo onClick={() => handleClick("/")} src={logo} alt="logo"/>
            <Links onClick={() => handleClick("/aboutme")} active={activeLink === "/aboutme"} >about me</Links>
            <Links onClick={() => handleClick("/skills")} active={activeLink === "/skills"}>skills</Links>
            <Links onClick={() => handleClick("/projects")} active={activeLink === "/projects"}>projects</Links>
            <Links onClick={() => handleClick("/contact")} active={activeLink === "/contact"}>contact</Links>
          </MainWrap>
        : <MainWrap>
           { !hambOpen
            ? <><Logo src={logo} alt="logo"/>
            <RxHamburgerMenu onClick={()=>setHambOpen(!hambOpen)} style={style}/>
            </>
            : <IoMdClose onClick={()=>setHambOpen(!hambOpen)} style={style}/>}
             {hambOpen
             ?<NavbarMobile>
                <Links onClick={() => handleClick("/aboutme")} active={activeLink === "/aboutme"} >about me</Links>
                <Links onClick={() => handleClick("/skills")} active={activeLink === "/skills"}>skills</Links>
                <Links onClick={() => handleClick("/projects")} active={activeLink === "/projects"}>projects</Links>
                <Links onClick={() => handleClick("/contact")} active={activeLink === "/contact"}>contact</Links>
             </NavbarMobile>
             :<></>}
          </MainWrap>
    )
}

export default Navbar

const MainWrap=styled.div`
   width:100%;
   height:8%;
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

const Links = styled.div`
     font-size:1.5vw;
     color:${(props) => (props.active ? "red" : "white")};
     transition: 2s;
     padding-right:40px;
     cursor:pointer;
     font-weight:bold;
     transition: text-shadow 0.5s, color 0.5s, text-transform 0.5s;
    

     &:hover{
        text-shadow:0 0 10px white;
        color:red;
     }

     @media screen and (max-width: 821px){
        font-size:4vw;
        padding-right:10px;
        margin-top:30px;
    }  
`

const Logo=styled.img`
   position:absolute;
   left:20px;
   width: 9%;
   justify-self:flex-start;

   @media screen and (max-width: 821px){
      width:20%;;
    }
`

//Mobile

  const NavbarMobile=styled.div`
    width:100%;
    height:100vh;
    padding:20px 0;
    background:black;
    position:absolute;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    z-index:1;
    top:17vw;
  `


  const MainWrapHome=styled.div`
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

const LinksHome = styled.div`
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