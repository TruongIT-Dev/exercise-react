import React from 'react';
import { Container, Row, Col, Card } from 'react-materialize';

export default function About() {
    return (
        <Container>
            {/* <Row> */}
            <Col m={6}>
                <Card className="blue-grey darken-1" textClassName="white-text" title="About Us">
                    <p>
                        Welcome to our website! We are a team of passionate individuals dedicated to providing high-quality products and services to our customers.
                    </p>
                    <br />
                    <p>
                        Our mission is to create innovative solutions that meet the needs of our clients and exceed their expectations. We strive to deliver exceptional results and build long-lasting relationships with our customers.
                    </p>
                    <br />
                    <p>
                        With years of experience in the industry, we have gained valuable insights and expertise that enable us to deliver outstanding outcomes. Our team consists of talented professionals who are committed to continuous improvement and staying up-to-date with the latest technologies and trends.
                    </p>
                </Card>
            </Col>
            <Col m={6}>
                <Card className="blue-grey darken-1" textClassName="white-text" title="About Us">
                    <p>
                        We value transparency, integrity, and open communication. We believe in working collaboratively with our clients to understand their unique requirements and provide tailored solutions. Customer satisfaction is our top priority, and we strive to deliver projects on time and within budget.
                    </p>
                    <br />
                    <p>
                        Thank you for visiting our website. We look forward to the opportunity to work with you and help you achieve your goals.
                    </p>
                </Card>
            </Col>
            {/* </Row> */}
        </Container>
    );
}
