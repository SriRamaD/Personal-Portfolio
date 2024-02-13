import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../assets/images/SkillLogo.png";

const Skills = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const renderSkill = (skill, percentage) => (
    <div className="skill-bar">
      <div className="skill-name">{skill}</div>
      <div className="skill-percentage" style={{ width: `${percentage}%` }}></div>
    </div>
  );

  return (
    <Row id="skills">
        <h1 style={{ marginBottom: '30px' }}> Skills </h1>
    <Col md={6}> {/* This Col wraps the Carousel */}
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} controls={false} className="skill-carousel">
        <Carousel.Item>
          <h3>Programming Skills</h3>
          {renderSkill('JavaScript', 90)}
          {renderSkill('Java', 80)}
          {renderSkill('Python', 80)}
          {renderSkill('C', 80)}
          {renderSkill('SQL', 80)}
          {renderSkill('HTML', 80)}
          {renderSkill('CSS', 80)}
          {renderSkill('C#', 80)}
          {renderSkill('Swift', 80)}
          {/* Add more programming skills here */}
        </Carousel.Item>
        <Carousel.Item>
          <h3>Tools/Technologies</h3>
          {renderSkill('Git', 85)}
          {renderSkill('Docker', 75)}
          {renderSkill('AWS', 80)}
          {renderSkill('GCP', 80)}
          {renderSkill('Docker', 80)}
          {renderSkill('Git', 80)}
          {renderSkill('Bootstrap', 80)}
          {renderSkill('Jenkins', 80)}
          {/* Add more tools/technologies here */}
        </Carousel.Item>
        <Carousel.Item>
          <h3>Frameworks</h3>
          {renderSkill('React', 95)}
          {renderSkill('Angular', 70)}
          {renderSkill('Vue.js', 80)}
          {renderSkill('Express.js', 80)}
          {renderSkill('Node.js', 80)}
          {renderSkill('Spring', 80)}
          {renderSkill('REST', 80)}
          {renderSkill('Hibernate', 80)}
          {renderSkill('GraphQL', 80)}
          {/* Add more frameworks here */}
        </Carousel.Item>
        <Carousel.Item>
          <h3>Database Skills</h3>
          {renderSkill('MySQL', 80)}
          {renderSkill('MongoDB', 85)}
          {renderSkill('MS SQL Server', 80)}
          {renderSkill('PostgreSQL', 80)}
          {/* Add more database skills here */}
        </Carousel.Item>
      </Carousel>
    </Col>
    <Col md={6}> {/* This Col wraps the image */}
      <img src={Logo} alt="SkillImage" className="skill-logo mb-5" />
    </Col>
    </Row>
  );
};

export default Skills;
