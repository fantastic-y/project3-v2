import React from 'react';
import { Button, Container, Table } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

export default function About(props) {
    const booklists= props;
    const ranking = [1,2,3,4,5,6,7,8,9,10];

    return(
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
                            {booklists.booklists.sort(function(a,b){return b.score-a.score}).slice(0,10)
                            .map(booklist => {
                            return <tr key={booklist._id}>
                                <td>{ranking}</td>
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
                            })}
                        </tbody>
                        </Table>
                </Container>
            </div>
    )
}
