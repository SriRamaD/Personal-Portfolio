import React, { useState } from 'react';
import { Card, Button, Row, Col, Modal } from 'react-bootstrap';
import ShoptakiLogo from "../assets/images/Shoptaki.png";
import PNILogo from "../assets/images/PNI.jpg";
import AmazonLogo from "../assets/images/Amazon.png";
import CapgeminiLogo from "../assets/images/Capgemini.png";

// Example of a single experience block
const ExperienceBlock = ({ experience }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="px-5">
      <Card className="experience-card">
        <Card.Img variant="top" src={experience.logo} />
        <Card.Body>
          <Card.Title>{experience.company}</Card.Title>
          <Card.Text>
            {experience.period}
            <br />
            {experience.shortDescription}
          </Card.Text>
          <Button variant="primary" onClick={() => setShow(true)}>Read More</Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={() => setShow(false)} size="lg" className="align-tems: bottom">
        <Modal.Header closeButton>
          <Modal.Title>{experience.company}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{experience.period}</h5>
          <p>{experience.fullDescription}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    // Add your experiences here
    {
      company: 'Shoptaki',
      period: 'August 2023 - Present',
      logo: ShoptakiLogo, // path to logo image
      shortDescription: 'Short description of your responsibilities.',
      fullDescription: 'Full description of your responsibilities and achievements.'
    },
    {
        company: 'PNI Therapeutics',
        period: 'September 2022 - May 2023',
        logo: PNILogo, // path to logo image
        shortDescription: 'Short description of your responsibilities.',
        fullDescription: 'Full description of your responsibilities and achievements.'
      },
      {
        company: 'Amazon',
        period: 'May 2022 - August 2022',
        logo: AmazonLogo, // path to logo image
        shortDescription: 'Short description of your responsibilities.',
        fullDescription: 'Full description of your responsibilities and achievements.'
      },
      {
        company: 'Capgemini',
        period: 'October 2020 - June 2021',
        logo: CapgeminiLogo, // path to logo image
        shortDescription: 'Short description of your responsibilities.',
        fullDescription: 'Full description of your responsibilities and achievements.'
      },
    // Repeat for other experiences
  ];

  return (
    <Row id="experience">
        <h1 style={{ marginBottom: '30px' }}>Experience</h1>
      {experiences.map((exp, idx) => (
        <Col key={idx} sm={12} md={6} className="mb-4">
          <ExperienceBlock experience={exp} />
        </Col>
      ))}
    </Row>
  );
};

export default Experience;
