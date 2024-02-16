import React from "react";
import "./Projects.css";
import one from "../../Image/Image1.png"
import two from ""

const Projects = () => {
    const data = [
        {
          Des: "Empowering businesses to offer digital programs to customers.",
          ProjectLink: "https://myfrontendintership.netlify.app/",
          GithubLink: "https://github.com/haywhyvilla/FIntechfrontendtask",
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