import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import BodyImage from "../assets/images/bodyimg2.png";
import { useState, useEffect } from "react";

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full Stack Developer", "Software Engineer", "Frontend Engineer", "Backend Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 200;

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i=loopNum%toRotate.length;
        let fullText = toRotate[i]; 
        let updatedText= isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length+1);
        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hi I'm Sri Rama `}</h1>
                        <h1 className="wrap">{ text }</h1>
                        <p>
                            Experienced and skilled Software Engineer with around 3 years of expertise in 
                            full-stack development. Proven track record of delivering highquality software 
                            solutions and optimizing performance. Proficient in a wide range of programming 
                            languages, tools, and technologies, enabling seamless end-to-end web and mobile
                            application development.
                        </p>
                        <button onClick={() => console.log('Contact me form')}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={BodyImage} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export default Banner;