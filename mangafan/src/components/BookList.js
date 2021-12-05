import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, ButtonGroup, Table } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booklists: [],
            isLoading: true
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('http://localhost:8000/api/booklists')
            .then(response => response.json())
            .then(data => this.setState({booklists: data, isLoading: false}));
    }
    // removeInv = async (id) => {
    //     await fetch(`http://localhost:8080/api/booklist/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     console.log("Remove Done!");
    //     let updateBooklists = 
    //         [...this.state.booklists].filter(i => i._id !== id);
    //     this.setState({booklists: updateBooklists});
    // }

    handleDelete = (props) => {
        this.setState({saved: !props.saved})
        ;
        console.log("Remove Done!");
    }

    render() {
        const { booklists, isLoading } = this.state;

        if(isLoading) {
            return <p>Please wait. Loading...</p>;
        }

        const bookList = booklists
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
                            color="info"
                            tag={Link}
                            to={"/booklists/" + booklist._id}
                        >Update your score</Button>
                        <Button
                            size="sm"
                            color="warning"
                            // onClick={() => this.removeInv(booklist._id)}
                            onClick={() => this.setState({ saved: !booklist.saved })}
                        >Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        })
        return (
            <div>
                <Container fluid>
                    <div className="float-right">
                        <Button
                            color="primary"
                            className="my-4"
                            tag={Link}
                            to="/booklists/new"
                        >Add Manga</Button>
                    </div>
                    <h3>Your Bookshelf</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="15%">Image</th>
                                <th width="20%">Manga Title</th>
                                <th width="15%">Author</th>
                                <th width="10%">Genres</th>
                                <th width="10%">Your Score</th>
                                <th width="30%">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookList}
                        </tbody>
                        </Table>
                </Container>
            </div>
        )
    }
}

export default BookList;