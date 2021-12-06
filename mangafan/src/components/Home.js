import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, 
    Card, CardBody, CardImg, CardTitle, CardText,
    Modal, ModalBody, ModalHeader, ModalFooter,
    ListGroup, ListGroupItem } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import companylogo from './img/mangafanlogo.png';
// import "./App.css";

export default function About(props) {
    const { booklists }= props;
    // Modal open state
    const [modal, setModal] = React.useState(false);
    // Toggle for Modal
    const toggle = () => setModal(!modal);

    return(
        <div>
            <div>
            <h3>Manga Animation News</h3>
            <ListGroup>
                <ListGroupItem>
                    <img src={companylogo} />
                    <div>
                    <h4></h4>
                    </div>
                </ListGroupItem>
                <ListGroupItem>
                    Dapibus ac facilisis in
                </ListGroupItem>
            </ListGroup>
            <Button color="success"
                onClick={toggle}>More details
            </Button>
                <Modal fullscreen="md" scrollable isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                    Modal title
                    </ModalHeader>
                    <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                    <Button
                        color="primary"
                        onClick={function noRefCheck(){}}
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