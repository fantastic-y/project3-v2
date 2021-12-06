import React, { Component } from 'react';
import { Button, Container, Table } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';

class Billboard extends Component {
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

    render() {
        const { booklists, isLoading } = this.state;

        if(isLoading) {
            return <p>Please wait. Loading...</p>;
        }

        const bookList = booklists
        .sort(function(a,b){return b-a})
        .map(booklist => {
            return <tr key={booklist._id}>
                <td>{booklist._id}</td>
                <td><img src={booklist.cover} alt="cover" /></td>
                <td>{booklist.title}</td>
                <td>{booklist.author}</td>
                <td>{booklist.genres}</td>
                <td>{booklist.score}</td>
                <td>
                <Button
                    size="sm"
                    color="success"
                    // onClick={() => this.removeInv(booklist._id)}
                    // onClick={() => this.handleSave(booklist)}
                >Add to your list</Button>
                </td>
            </tr>
        }).sort(function(a, b) {return a - b;});
          
        return (
            <div>
                <Container fluid>
                    <h3>Billboard Top 10 Mangas</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="5%">Ranking</th>
                                <th width="5%">Image</th>
                                <th width="5%">Manga Title</th>
                                <th width="5%">Author</th>
                                <th width="5%">Genres</th>
                                <th width="5%">Score</th>
                                <th width="10%">Save to your list</th>
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

export default Billboard;