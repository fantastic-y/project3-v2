import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, 
    Card, CardBody, CardImg, CardTitle, CardText,
    Modal, ModalBody, ModalHeader, ModalFooter, 
    ListGroup, ListGroupItem, ButtonGroup } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "react-bootstrap";
import "./css/styles.css";

export default function About(props) {
    const { booklists }= props;
    // Modal open state
    const [modal, setModal] = React.useState(false);
    // Toggle for Modal
    const toggle = () => setModal(!modal);

    const [show, setShow] = React.useState(true);
    const showheart = () => setShow(!show);

    return(
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img alt="900x500" src="https://starcrossedanime.com/ousama-ranking-2/"/>
                        <Carousel.Caption>
                            <h3>Ousama Ranking</h3>
                            <p>Highest Expectation</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="900x500" src="https://starcrossedanime.com/deep-insanity-the-lost-child/"/>
                        <Carousel.Caption>
                            <h3>Deep insanity: the lost child</h3>
                            <p>Do not miss this one if you like Sci-fi</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="900x500" src="https://starcrossedanime.com/0-summer-ghost/"/>
                        <Carousel.Caption>
                            <h3>Summer Ghost</h3>
                            <p>If you would like to explore small studio projects, look no futher than this</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <br></br>
            <div>
                <Container fluid>
                <Link
                        to="/news"
                        className="home-nav-link"
                    >More News</Link>
                <h3>Manga Animation News</h3>
                </Container>
                <ListGroup>
                    <ListGroupItem>
                        <img alt="newsimg" src="https://cdn.myanimelist.net/s/common/uploaded_files/1638513349-b5ae2a5f089cc8d9c0278032e585847d.jpeg" />
                        <div>
                        <h4>'Baraou no Souretsu' Announces Supporting Cast {'  '}<FontAwesomeIcon icon={faHeart} className="icon" hidden={show}/></h4>
                        <p>The official website for the television anime adaptation of Aya Kanno's Baraou no Souretsu (Requiem of the Rose King) manga revealed two additional cast members, two character promos, and a second key visual (pictured) on Thursday. The anime is scheduled to premiere on January 9 at 10:30 p.m. on Tokyo MX, followed by KBS Kyoto, Sun TV, and BS11...</p>
                        <p><span>2021-12-03 by </span>Aidan</p>
                        <Button color="success" outline
                            onClick={toggle}>More details
                        </Button>
                        </div>
                    </ListGroupItem>
                </ListGroup>
            
                <Modal fullscreen="md" scrollable isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                    'Baraou no Souretsu' Announces Supporting Cast {'  '}
                    <FontAwesomeIcon icon={faHeart} className="icon" hidden={show}/>
                    </ModalHeader>
                    <ModalBody>
                    <b>2021-12-03 by Aidan</b><br/><br/>
                    The official website for the television anime adaptation of Aya Kanno's Baraou no Souretsu 
                    (Requiem of the Rose King) manga revealed two additional cast members, 
                    two character promos, and a second key visual (pictured) on Thursday. 
                    The anime is scheduled to premiere on January 9 at 10:30 p.m. on Tokyo MX, 
                    followed by KBS Kyoto, Sun TV, and BS11.<br/><br/>
                    <b>Cast</b><br/><br/>
                    Buckingham: Riho Sugiyama (Nami yo Kiitekure)<br/><br />
                    Jeanne d'Arc: Aoi Yuuki (Sonny Boy)<br/><br/>
                    Kentarou Suzuki (Satsuriku no Tenshi) is helming the anime at J.C.Staff. 
                    Hiroki Uchida (Gamers!) is handling the series composition and script. 
                    Tsutomu Hashizume (Darling in the FranXX key animation) is designing the characters.
                    <br/><br/>Kanno began serializing the historical drama manga in Monthly Princess 
                    magazine in October 2013. Akita Shoten will ship the 16th volume on December 16. 
                    VIZ Media licensed the manga in English in March 2015 and shipped the 14th 
                    volume on October 12.
                    </ModalBody>
                    <ModalFooter>
                    <Button
                        color="primary"
                        onClick={showheart}
                    >I like it!</Button>
                    {' '}
                    <Button onClick={toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
            <Container fluid>
                <br></br>
                <div className='sort-button'>
                <p>Sort Manga By:
                <span>
                    <select
                    name="sort"
                    onChange={(e) => props.onSort(booklists, e.target.value)}>
                    <option value="default">by default</option>
                    <option value="asc">a-z</option>
                    <option value="desc">z-a</option>
                    </select>
                </span>
                </p>
                </div>
                <h3>Manga Library</h3>
                <Row xs={2} sm={3} md={4} lg={6} className="g-4 home-row">
                    {booklists.map(booklist=>{
                        return <Col >
                            <Card>
                                <CardImg className='home-cardimg' variant="top" src={booklist.cover} alt="cover" />
                                <CardBody>
                                <CardTitle className='home-cardtitle'>{booklist.title}</CardTitle>
                                <CardText>
                                    <span>Score: {booklist.score}/10</span>
                                    <br />
                                </CardText>
                                <ButtonGroup>
                                    <Button className="home-button" color="secondary" outline size="sm" href={`/booklists/${booklist._id}`}>
                                        Details
                                    </Button>
                                    <Button className="home-button" color="success" size="sm"
                                        onClick = {()=> props.handleSave(booklist)}
                                    >Save</Button>
                                </ButtonGroup>
                                </CardBody>
                            </Card>
                        </Col>
                    })
                    }
                </Row>
            </Container>
        </div>
    )
}