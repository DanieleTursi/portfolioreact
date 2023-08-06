import React,{useState,useRef} from "react";
import styled from "styled-components"
import emailjs from "emailjs-com";

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

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uz38h3i', 'template_wudqq77', form.current, 'qOKNlBU7UjqKgvdq0').then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    return(
     <MainWrap>
        <FormWrap ref={form} onSubmit={sendEmail}>
            <Label>Name</Label>
            <Name
                  required 
                  type='text' 
                  name='name'
                  id="name"
                  onChange={handleName}
                  value={name}
                  placeholder="e.g. David Smith"
                  ref={inputRef}
            />
            <Label>Email</Label>
            <Name
                  required
                  type='email' 
                  name='email'
                  id="email"
                  onChange={handleEmail}
                  value={email}
                  placeholder="e.g. davidsmith@gmail.com"
                  ref={inputRef}
            />
            <Label>Message</Label>
            <Message
                  required
                  type="text"
                  id="message"
                  name="message"
                  onChange={handleMessage}
                  value={message}
                  // placeholder="e.g. Hi Daniele,

                  //       I came across your portfolio website and I'm really impressed with your work as a software developer. 

                  //       I'm interested in discussing a potential collaboration or learning more about your experience. Please let me know when you're available for a chat.

                  //       Looking forward to connecting with you!

                  //       Best regards,
                       
                  //       David Smith"

                  ref={inputRef}
            />
            <SubResWrap>
               <Submit type="submit" onClick={()=>handleReset()}/>
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
   width:40%;
   display:flex;
   flex-direction: column;
   justify-content:center;
   align-items:center;

   @media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {
    width:60%;
    height:60%;
}
`

const Label=styled.label`
   padding:10px 0 5px 0;
`
const Name=styled.input`
    width:100%;
    padding:10px;

    @media screen and (min-width: 800px) and (max-width: 900px) {
         padding:2px;
      }

    @media screen and (max-width: 768px){
       width:300px;
     }
`

const Submit=styled.input`
    min-width:100px;
    padding:10px;
    margin:10px;
    border-radius:8px;
    cursor:pointer;
    background:#ECEAE5;

    &:hover{
      transform:scale(1.05);
      background:#D6D3CD;
    }

    @media screen and (min-width: 800px) and (max-width: 900px) {
         padding:2px;
      }

`

const Message=styled.textarea`
    width:100%;
    min-height:40%;
    padding:10px;

    @media screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {
         min-width:40%;
         min-height:40%;
      }

    @media screen and (max-width: 768px){
       width:303px;
       min-height:40%;
     }
    
`

const SubResWrap=styled.div`
    width:100%;
    display:flex;
    justify-content:center;  
`
