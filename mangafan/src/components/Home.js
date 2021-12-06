import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, 
    Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

export default function About(props) {
    const booklists= props;

    return(
        <div>
        <Container fluid>
            <Button className="m-5 nav bg-light">
                <Link
                    to="/booklists"
                    className="nav-link"
                >Manage Booklist</Link>
            </Button>

        <p>Sort Manga By: 
          <span class="sort-button">
            <select
              name="sort"
              onChange={(e) => props.onSort(booklists.booklists, e.target.value)}>
              <option value="asc">a-z</option>
              <option value="desc">z-a</option>
            </select>
          </span>
        </p>

        <Row xs={1} md={4} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
                <Card>
                    {booklists.booklists.map(booklist=>{
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