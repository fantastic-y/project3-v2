import React from 'react';
import { Button, Container, Row, Col, 
    Card,  CardImg, CardTitle, CardText, CardImgOverlay, } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import aboutus from './img/banner_5.jpg';
import "./css/styles.css";

export default function About() {

    return(
        <Container fluid className='about'>
            <Card className="about-card" inverse>
                <CardImg
                    className='about-banner'
                    alt="about_banner"
                    src={aboutus}
                />
                <CardImgOverlay>
                    <CardTitle tag="h1" className='about-title'>About MangaFan</CardTitle>
                    <CardText>The most professional manga database and community for the hardcore manga fans in SoCal.</CardText>
                </CardImgOverlay>
            </Card>
        <Row>
            <Col sm="6">
                <Card body>
                <CardTitle tag="h5">
                    DIY Manga List
                </CardTitle>
                <CardText>
                    Create your personalized list from tens of thousands of titles and share with your friends.
                </CardText>
                </Card>
            </Col>
            <Col sm="6">
                <Card body>
                <CardTitle tag="h5">
                    Stay up to date
                </CardTitle>
                <CardText>
                    Receive the most up-to-date news about the manga and anime you like.
                </CardText>
                </Card>
            </Col>
        </Row>
        
        <iframe title="gif" src="https://giphy.com/embed/qe9K8qYKxNUuk" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        
        <Button className="about-signup" color="secondary" href="#login">
            Sign Up Here
        </Button>
        </Container>
    )
}
