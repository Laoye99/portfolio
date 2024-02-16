import React from "react";
import "./Projects.css";
import one from "../../Image/Image1.png";
import two from "../../Image/Image 2.png";
import three from "../../Image/Image 3.png";

const Projects = () => {
    const data = [
        {
          Des: "An Online Clothing Store for All Types of Wears",
          ProjectLink: "https://laoye-jza5.vercel.app/",
          GithubLink: "https://github.com/Laoye99/crwn-clothing-v2-redux-toolkit",
          image: one,
        },
        {
          Des: "An App Designed to Locate the Closest Pharmacy Store to You.",
          ProjectLink: "https://discover-pharmacy-stores.vercel.app/",
          GithubLink: "https://github.com/Laoye99/pharmacy-stores",
          image: two,
        },
        {
          Des: "A feature that displays a list of NFTs",
          ProjectLink: "https://laoye99.github.io/cars/",
          GithubLink: "https://github.com/Laoye99/cars",
          image: three,
        }
    ]

    return (
        <div className="container section-project" id="project">
          <div className="section-title bottom">
            <h2>Projects</h2>
            <span className="line"></span>
          </div>
    
          <div className="row">
            {data.map((item, index) => (
              <div
                className="col-xl-6 col-lg-6 col-md-6 col-sm-12 bottom left"
                key={index}
              >
                <ProjectSite {...item} />
              </div>
            ))}
          </div>
        </div>
      );
}

export default Projects;