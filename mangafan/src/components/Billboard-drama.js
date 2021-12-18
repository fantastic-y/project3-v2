import React from 'react';
import { Button, Container, Table, Badge } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import "./css/styles.css";

export default function BillboardDrama(props) {
    const {booklists}= props;
    let i = 1 ;

    return(
        <div>
            <Container fluid>
                <h3>Billboard Top 10 Mangas</h3>
                <span>Genres: </span>
                <Badge active color="dark" href="/billboard">All</Badge>{' '}
                <Badge color="dark" href="/billboard/action">Action</Badge>{' '}
                <Badge color="dark" href="/billboard/comedy">Comedy</Badge>{' '}
                <Badge color="dark" href="/billboard/drama">Drama</Badge>{' '}
                <Badge color="dark" href="/billboard/Mystery">Mystery</Badge>
                    <Table hover responsive size="sm">
                        <thead>
                            <tr>
                                <th width="5%">Ranking</th>
                                <th width="5%">Image</th>
                                <th width="5%">Manga Title</th>
                                <th width="5%">Author</th>
                                <th width="5%">Genres</th>
                                <th width="5%">Score</th>
                                <th width="10%">Save the Manga</th>
                            </tr>
                        </thead>
                        <tbody>
                            {booklists.filter(booklist => booklist.genres === "Drama").sort(function(a,b){return b.score-a.score}).slice(0,10)
                            .map(booklist => {
                            return <tr key={booklist._id}>
                                <td>{i ++}</td>
                                <td><img src={booklist.cover} alt="cover" /></td>
                                <td>{booklist.title}</td>
                                <td>{booklist.author}</td>
                                <td>{booklist.genres}</td>
                                <td>{booklist.score}</td>
                                <td>
                                <Button color="success" outline size="sm">
                                    <Link to={`/booklists/${booklist._id}`}>Details</Link>
                                </Button>
                                <Button
                                    size="sm"
                                    color="success"
                                    // onClick={() => this.removeInv(booklist._id)}
                                    onClick={() => props.handleSave(booklist)}
                                >Save to my booklist</Button>
                                </td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </Container>
            </div>
    )
}
