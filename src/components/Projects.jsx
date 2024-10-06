import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Swiggy Clone",
      description: "MERN stack-based Swiggy food delivery clone",
      link: "https://great-food-swiggy.netlify.app",
      imgUrl:
        "https://img.freepik.com/free-vector/safe-food-delivery-order-receive_23-2148549716.jpg?size=626&ext=jpg&ga=GA1.1.12840364.1692295179&semt=ais_hybrid",
    },
    {
      id: 2,
      title: "Tic Tac Toe Game",
      description: "Tic-Tac-Toe game using HTML, CSS, JavaScript",
      link: "https://the-tic-tac-toe-web-game.netlify.app",
      imgUrl:
        "https://t3.ftcdn.net/jpg/02/30/17/96/240_F_230179611_I3Q27sJayLpk6rqyIgjU4nsXuRvY1dn9.jpg",
    },
    {
      id: 3,
      title: "BMI Calculator",
      description: "BMI Calculator built with HTML, CSS, JavaScript",
      link: "https://bmi-calculator-web-application.netlify.app",
      imgUrl:
        "https://img.freepik.com/free-vector/bmi-body-mass-index-isometric-landing-page-banner_107791-9278.jpg?ga=GA1.1.12840364.1692295179&semt=ais_hybrid",
    },
    {
      id: 4,
      title: "Weather App",
      description: "Weather app using HTML, CSS, JavaScript, API.",
      link: "https://weather-web-app-practice1.netlify.app",
      imgUrl:
        "https://img.freepik.com/premium-photo/weather-forecast-mobile-application-smartphone-trees-background_101969-2828.jpg?ga=GA1.1.12840364.1692295179&semt=ais_hybrid",
    },
    {
      id: 5,
      title: "To-Do List",
      description: "To-do list with HTML, CSS, JavaScript, LocalStorage.",
      link: "https://best-todo-list-web-app.netlify.app",
      imgUrl:
        "https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?ga=GA1.1.12840364.1692295179&semt=ais_hybrid",
    },
    {
      id: 6,
      title: "Digital Clock",
      description: "BMI Calculator built with HTML, CSS, JavaScript",
      link: "https://digitial-clock-web-project.netlify.app",
      imgUrl:
        "https://img.freepik.com/premium-vector/digital-clock-red-light_78370-7269.jpg?ga=GA1.1.12840364.1692295179&semt=ais_hybrid",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Display my collection of MERN stack projects, demonstrating
                    my expertise in MongoDB, Express.js, React, and Node.js.
                    Each project highlights innovative solutions and efficient
                    design, focusing on functionality and user experience.
                    Explore live demos and GitHub repositories to gain insight
                    into my technical skills, creative approach as a full-stack
                    developer
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
