import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, 
    Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booklists: [],
            isLoading: true,
            saved: false,
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('http://localhost:8080/api/booklists')
            .then(response => response.json())
            .then(data => this.setState({booklists: data, isLoading: false}));
    }

    handleSave = (props) => {
        this.setState({saved: !props.saved});
        console.log("Saved to the list!");
    }

    render() {
        const { booklists, isLoading } = this.state;

        if(isLoading) {
            return <p>Please wait. Loading...</p>;
        }

        const bookList = booklists
        .filter(booklist => booklist.cover !== '')
        .map(booklist => {
            return <Container>
                {/* <Row>
                    <Col xs={12} md={4} lg={3}>
                        <img src={booklist.cover} alt="cover" />
                        <br />
                        <p><span>{booklist.title} </span>({booklist.score}/10)</p>
                        <p>Author: {booklist.author}</p>
                        <Button
                            size="sm"
                            color="success"
                            // onClick={() => this.removeInv(booklist._id)}
                            onClick={() => this.setState({saved: !booklist.saved})}
                        >Save to my booklist</Button>
                    </Col>
                </Row> */}
                <Row xs={1} md={4} className="g-4">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <Col>
                            <Card>
                                <CardImg variant="top" src={booklist.cover} alt="cover" />
                                <CardBody>
                                <CardTitle>{booklist.title}</CardTitle>
                                <CardText>
                                    <span>Score: {booklist.score}/10</span>
                                    <br />
                                    <span>Author: {booklist.author}</span>
                                </CardText>
                                <Button color="success">Save to my booklist</Button>
                                </CardBody>
                            </Card>
                            </Col>
                        ))}
                    </Row>
            </Container>
        })

        return (
            <div>
                <Container fluid>
                    <Button className="m-5 nav bg-light">
                        <Link
                            to="/booklists"
                            className="nav-link"
                        >Manage Booklist</Link>
                    </Button>
                    {bookList}
                </Container>
            </div>
        );
    }
}

export default Home;