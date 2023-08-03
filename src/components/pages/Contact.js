import React,{useState,useRef} from "react";
import styled from "styled-components"

const Contact =()=>{
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [message,setMessage]=useState()
    const inputRef = useRef(null);

    const handleName = (event) => {
      setName(event.target.value);
    };
    
    const handleEmail = (event) => {
      setEmail(event.target.value);
    }; 

    const handleMessage = (event) => {
      setMessage(event.target.value);
    }; 

    const handleReset=()=>{
      setName("")
      setEmail("")
      setMessage("")
    }

    return(
     <MainWrap>
        <FormWrap>
            <Label>Name</Label>
            <Name
                  type="string"
                  id="name"
                  name="name"
                  onChange={handleName}
                  value={name}
                  placeholder="e.g. David Smith"
                  ref={inputRef}
            />
            <Label>Email</Label>
            <Name
                  type="string"
                  id="email"
                  name="email"
                  onChange={handleEmail}
                  value={email}
                  placeholder="e.g. davidsmith@gmail.com"
                  ref={inputRef}
            />
            <Label>Message</Label>
            <Message
                  type="string"
                  id="message"
                  name="message"
                  onChange={handleMessage}
                  value={message}
                  placeholder="e.g. Hi Daniele,

                        I came across your portfolio website and I'm really impressed with your work as a software developer. 

                        I'm interested in discussing a potential collaboration or learning more about your experience. Please let me know when you're available for a chat.

                        Looking forward to connecting with you!

                        Best regards,
                       
                        David Smith"

                  ref={inputRef}
            />
            <SubResWrap>
               <Submit type="submit"/>
               <Submit type="reset" onClick={()=>handleReset()}/>
            </SubResWrap>
        </FormWrap>

     </MainWrap>

    )
}

export default Contact

const MainWrap=styled.div`
   width:100vw;
   height:100vh;
   background:black;
   font-family: Monaco;
   display:flex;
   flex-direction: column;
   justify-content:center;
   align-items:center;
`

const FormWrap=styled.form`
   width:30%;
   display:flex;
   flex-direction: column;
   justify-content:center;
   align-items:center;
`

const Label=styled.label`
   padding:10px 0 5px 0;
`
const Name=styled.input`
    width:100%;
    padding:10px;

    @media screen and (max-width: 768px){
       width:300px;
     }
`

const Submit=styled.input`
    width:50%;
    padding:10px;
    margin:10px;
    border-radius:8px;
    cursor:pointer;

    &:hover{
      transform:scale(1.05);
    }

    @media screen and (max-width: 768px){
       width:300px;
     }
`

const Message=styled.textarea`
   width:100%;
    min-height:150px;
    padding:10px;

    @media screen and (max-width: 768px){
       width:303px;
       min-height:300px;
     }
    
`

const SubResWrap=styled.div`
    width:100%;
    display:flex;
    
`
