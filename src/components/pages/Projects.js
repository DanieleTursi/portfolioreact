import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import mycinema from "../../assets/images/mycinema.png";
import helpmechoose from "../../assets/images/helpmechoose.png";
import filmapp from "../../assets/images/FilmApp.png";
import tribute from "../../assets/images/tribute.png";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768 ? true : false
  );
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(-1);
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  const Projects = [
    {
      link: "https://mycinema-omega.vercel.app",
      img: mycinema,
      alt: "mycinema proj",
      name: "MYCINEMA",
      lang: "React",
    },
    {
      link: "https://help-me-choose.vercel.app",
      img: helpmechoose,
      alt: "helpmechoose proj",
      name: "HelpMeChoose",
      lang: "HTML,CSS,JavaScript",
    },
    {
      link: "https://gndtdigital.com/home",
      img: tribute,
      alt: "WilliamKamkwamba proj",
      name: "William Kamkwamba",
      lang: "HTML,CSS",
    },
    {
      link: "https://replit.com/@DanieleTursi/FilmApp?embed=true",
      img: filmapp,
      alt: "FilmApp proj",
      name: "FilmApp",
      lang: "Python,MySql",
    },
  ];

  useEffect(() => {}, [hoveredIndex]);
  return (
    <MainWrap>
      <ProjectsWrap>
        {Projects.map((proj, idx) => (
          <Project
            key={idx}
            onClick={() => openInNewTab(proj.link)}
            onMouseOver={() => handleMouseOver(idx)}
            onMouseOut={handleMouseOut}
          >
            {!isMobile ? (
              <>
                <ProjName>{proj.name}</ProjName>
                {hoveredIndex === idx && <img src={proj.img} alt={proj.alt} />}
                <Code>{proj.lang}</Code>
              </>
            ) : (
              <MobileWrap>
                <ProjName>{proj.name}</ProjName>
                <Code>{proj.lang}</Code>
              </MobileWrap>
            )}
          </Project>
        ))}
      </ProjectsWrap>
    </MainWrap>
  );
};

export default Projects;

const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  font-family: Monaco;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectsWrap = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Project = styled.div`
  position: relative;
  height: 18vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease-out;
  }

  ${
    "" /* @media screen and (max-width: 768px){
      height:180px;
     } */
  }

  img {
    position: absolute;
    top: 40px;
    width: 55%;
    height: 60%;
    border-radius: 8px;
    margin-top: 20px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      width: 200px;
      height: 110px;
    }
  }
`;

const MobileWrap = styled.div`
  display: inline-block;
  position: absolute;
`;

const ProjName = styled.h1`
  font-size: 20px;
  margin: 20px 0 5px 0;

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

const Code = styled.h2`
  font-size: 14px;
  margin: 5px 0 20px 0;

  @media screen and (max-width: 767px) {
    font-size: 10px;
    margin: 5px 0 10px 0;
  }
`;
