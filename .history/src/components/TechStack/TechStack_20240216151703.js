import { useState } from "react";
import "./TechStack.css";
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";


const TechStack = () => {
    const data = [
        {
          name: "FullStack Developer",
        },
    
        {
          name: "JavaScript",
        },
        {
          name: "React Js",
        },
        {
          name: "Next JS",
        },
        {
          name: "CSS",
        },
        {
          name: "HTML5",
        },
        {
          name: "TailwindCSS",
        },
        {
          name: "Vanilla JS",
        },
        {
          name: "SCSS",
        },
        {
          name: "Git",
        },
        {
          name: "GitHub",
        },
        {
          name: "Java",
        },
        {
          name: "Springboot",
        },
        {
          name: "Servlet",
        },
        {
          name: "Maven",
        },
        {
          name: "Eclipse IDE",
        },
        {
            name: "IntelliJ IDE",
        },
        {
            name: "MySQL",
        },
        {
            name: "Postman",
        },
        {
            name: "MySQL",
        },
        {
            name: "Tomcat",
        },
      ];
    
      const colors = [
        "#FF4C33",
        "#FFE333",
        "#B2FF33",
        "#33FF58",
        "#33CAFF",
        "#3355FF",
        "#F033FF",
        "#FF33C4",
        "#FF3386",
        "#FF334C",
        "#33FF42",
        "#FF3633",
        "#9C33FF",
        "#33FFF6",
        "#33FF58",
        "#FF33C4",
        "#034694",
        "#5A0394",
        "#940303",
        "#944403",
        "#449403",
        "#03945C"
      ];

      const [showMoreTechStack, setMoreTechStack] = useState(9);

      const loadMore = () => {
        setMoreTechStack((prev) => prev + 3);
      };
      return (
        <div className="container techstack-section" id="stack">
      <div className="section-title">
        <h2>Tech Stack</h2>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.slice(0, showMoreTechStack).map((item, index) => (
          <Fade right>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
              <div
                className={
                  index === 0
                    ? "tech-content-marked tech-content"
                    : "tech-content"
                }
              >
                <span
                  className="tech-number"
                  style={{ backgroundColor: colors[index] }}
                >
                  {index + 1}
                </span>
                <p>{item.name}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      {showMoreTechStack >= data.length ? null : (
        <Zoom>
          <span className="load-more" onClick={loadMore}>
            Load More
          </span>
        </Zoom>
      )}
    </div>
      );
};

export default TechStack;