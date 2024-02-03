import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row, Col } from "react-bootstrap";
import SkillImage from "../assets/images/bodyimg1.png";
import JavaImage from "../assets/images/Java.png";
import ReactImage from "../assets/images/React.png";

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-box">
                        <h1>Skills</h1>
                        <p>Description about skills</p>
                        <Carousel responsive={responsive} className="skill-slider" infinite={true}>
                            <div className="item">
                                <img src={JavaImage} alt="Image1" />
                                <h4>Java</h4>
                            </div>
                            <div className="item">
                                <img src={ReactImage} alt="Image2" />
                                <h4>React</h4>
                            </div>
                            <div className="item">
                                <img src={SkillImage} alt="Image3" />
                                <h4>Skill Name 3</h4>
                            </div>
                            <div className="item">
                                <img src={SkillImage} alt="Image4" />
                                <h4>Skill Name 4</h4>
                            </div>
                            <div className="item">
                                <img src={SkillImage} alt="Image5" />
                                <h4>Skill Name 5</h4>
                            </div>
                            <div className="item">
                                <img src={SkillImage} alt="Image6" />
                                <h4>Skill Name 6</h4>
                            </div>
                            <div className="item">
                                <img src={SkillImage} alt="Image7" />
                                <h4>Skill Name 7</h4>
                            </div>
                            <div className="item">
                                <img src={SkillImage} alt="Image8" />
                                <h4>Skill Name 8</h4>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );

};
export default Skills;