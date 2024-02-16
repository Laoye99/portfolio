import React from "react";
import "./Projects.css";
import one from "../../Image/Image1.png";
import two from "../../Image/Image 2.png";
import three from "../../Image/Image 3.png";

const Projects = () => {
    const data = [
        {
          Des: "An Online Clothing Store for A",
          ProjectLink: "https://laoye-jza5.vercel.app/",
          GithubLink: "https://github.com/Laoye99/crwn-clothing-v2-redux-toolkit",
          image: one,
        },
        {
          Des: "Reports of transactions.",
          ProjectLink: "https://pavilionstage3project.netlify.app/",
          GithubLink: "https://github.com/haywhyvilla/PavilionFrontendTask",
          image: two,
        },
        {
          Des: "A feature that displays a list of NFTs",
          ProjectLink: "https://myfrontendintership.netlify.app/",
          GithubLink: "https://github.com/haywhyvilla/AlturaFrontendTask",
          image: three,
        }
    ]
}

export default Projects;