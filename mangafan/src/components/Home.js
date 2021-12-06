import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, 
    Card, CardBody, CardImg, CardTitle, CardText,
    Modal, ModalBody, ModalHeader, ModalFooter, 
    ListGroup, ListGroupItem } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./App.css";

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
            <h3>Manga Animation News</h3>
            <ListGroup>
                <ListGroupItem>
                    <img id="newsimg" alt="newsimg" src="https://cdn.myanimelist.net/s/common/uploaded_files/1638513349-b5ae2a5f089cc8d9c0278032e585847d.jpeg" />
                    <div>
                    <h4>'Baraou no Souretsu' Announces Supporting Cast {'  '}<FontAwesomeIcon icon={faHeart} className="icon" hidden={show}/></h4>
                    <Link
                        to="/news"
                        className="nav-link"
                    >More News</Link>
                    <p>The official website for the television anime adaptation of Aya Kanno's Baraou no Souretsu (Requiem of the Rose King) manga revealed two additional cast members, two character promos, and a second key visual (pictured) on Thursday. The anime is scheduled to premiere on January 9 at 10:30 p.m. on Tokyo MX, followed by KBS Kyoto, Sun TV, and BS11...</p>
                    <p><span>2021-12-03 by </span>Aidan</p>
                    <Button color="success"
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
            <Button className="m-5 nav bg-light">
                <Link
                    to="/booklists"
                    className="nav-link"
                >Manage Booklist</Link>
            </Button>
        <h3>Manga Library</h3>
        <p>Sort Manga By:
          <span class="sort-button">
            <select
              name="sort"
              onChange={(e) => props.onSort(booklists, e.target.value)}>
              <option value="asc">a-z</option>
              <option value="desc">z-a</option>
            </select>
          </span>
        </p>

        <Row xs={1} md={4} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
                <Card>
                    {booklists.map(booklist=>{
                        return <div>
                        <CardImg variant="top" src={booklist.cover} alt="cover" />
                        <CardBody>
                            <CardTitle>{booklist.title}</CardTitle>
                            <CardText>
                                <span>Score: {booklist.score}/10</span>
                                <br />
                                <span>Author: {booklist.author}</span>
                            </CardText>
                            <Button color="success"
                                onClick = {()=> props.handleSave(booklist)}
                            >Save to my booklist</Button>
                            </CardBody>
                        </div>
                    })
                    }
                </Card>
            </Col>
            ))}
        </Row>
      </Container>
            </div>
    )
}