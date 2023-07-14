import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar.js/Navbar";

const Aboutme =()=>{
    const navigate=useNavigate();
    const par=['alert("','")']

    return(
     <MainWrap>
     <Navbar/>
     <Wrap>
        <Link>{par[0]}</Link><span>    Technology and programming have always been my passion, energizing me with their challenges. I thrive both in team and independent settings, as I believe that a combination of collaboration and autonomy leads to the best outcomes. I enjoy learning from my colleagues and sharing my own knowledge with them, as I believe that knowledge-sharing is key to success.
    <br/> My curiosity drives me to constantly explore and expand my understanding of technology and programming, and I take great pleasure in the learning process.</span><LinkTwo>{par[1]}</LinkTwo>
    </Wrap>
     </MainWrap>

    )
}

export default Aboutme


const MainWrap=styled.div`
   width:100vw;
   height:100vh;
   background:black;
   font-family: Monaco;
   display:flex;
   flex-direction: row;
   ${'' /* justify-content:center;
   align-items:center; */}
   span{
        font-size:1.9vw;
        padding:0 30px;
     }

     @media screen and (max-width: 768px){
        span{
        font-size:4vw;
        padding:0 10px;
     }
    }  
`

const Wrap=styled.div`
   height:23vw;
   display:flex;
   align-items:flex-start;
   margin: 20% 2%;;
   

   @media screen and (max-width: 768px){
      height:47vh;
      margin:40% 2%;
    }
  

`

const Link = styled.div`
     font-size:1.5vw;
     color:white;
     cursor:pointer;
     @media screen and (max-width: 768px){
      font-size:1.5vh;
    }
`

const LinkTwo = styled.div`
     font-size:1.5vw;
     color:white;
     cursor:pointer;
     align-self:flex-end;

     @media screen and (max-width: 768px){
      font-size:1.5vh;
    }
`
