import React from 'react';
import { Button, Container, ButtonGroup, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

export default function BookList(props) {
    const {booklists}= props;

    return(
        <div>
            <Container fluid>
                <div className="float-right">
                    <Button
                        color="success"
                        className="my-4"
                        tag={Link}
                        to="/booklists/edit/new"
                    >Add Manga</Button>
                </div>
                <h3>Your Bookshelf</h3>
                <Table responsive className="mt-4">
                    <thead>
                        <tr>
                            <th scope="row">Image</th>
                            <th scope="row">Manga Title</th>
                            <th scope="row">Author</th>
                            <th scope="row">Genres</th>
                            <th scope="row">Your Score</th>
                            <th scope="row">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                         {booklists
                            .filter(booklist => booklist.saved === true)
                            .map(booklist => {
                                return <tr key={booklist._id}>
                                <td><img src={booklist.cover} alt="cover" /></td>
                                <td style={{whiteSpace: 'nowrap'}}>{booklist.title}</td>
                                <td>{booklist.author}</td>
                                <td>{booklist.genres}</td>
                                <td>{booklist.yourscore}</td>
                                <td>
                                    <ButtonGroup>
                                        <Button
                                            size="sm"
                                            color="secondary"
                                            tag={Link}
                                            to={"/booklists/edit/" + booklist._id}
                                        >Update your score</Button>
                                        <Button
                                            size="sm"
                                            color="danger"
                                            // onClick={() => this.removeInv(booklist._id)}
                                            onClick={() => props.handleSave(booklist)}
                                        >Delete</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        })}
                    </tbody>
                    </Table>
            </Container>
        </div>
    )
}
