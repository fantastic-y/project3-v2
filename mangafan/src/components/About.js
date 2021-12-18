import React from 'react';
import { Button, Container, Row, Col, 
    Card,  CardImg, CardTitle, CardText, CardImgOverlay, } from 'reactstrap';
// import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import aboutus from './img/about_banner.jpg';
// import "./App.css";

export default function About() {

    return(
        <Container fluid>
            <Card inverse>
                <CardImg
                alt="about_banner"
                src={aboutus}
                width="100%"/>
                <CardImgOverlay>
                    <CardTitle tag="h1">About MangaFan</CardTitle>
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
        <Button href="/login">
            Sign Up Here
        </Button>
        </Container>
    )
}
