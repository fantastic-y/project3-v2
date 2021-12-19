import React from 'react';
import { Button, Container, Table, ButtonGroup } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";


export default function BillboardMystery(props) {
    const {booklists}= props;
    let i = 1 ;

    return(
        <div className='billboard'>
            <Container fluid>
                <h3>Billboard Top 10 Mangas</h3>
                <span>Genres: </span>
                <ButtonGroup>
                    <Button outline color="success" href="/billboard">All</Button>{' '}
                    <Button outline color="success" href="/billboard/action">Action</Button>{' '}
                    <Button outline color="success" href="/billboard/comedy">Comedy</Button>{' '}
                    <Button outline color="success" href="/billboard/drama">Drama</Button>{' '}
                    <Button active outline color="success" href="/billboard/mystery">Mystery</Button>{' '}
                </ButtonGroup>
                    <Table hover responsive size="sm">
                        <thead>
                            <tr>
                                <th width="5%">Ranking</th>
                                <th width="20%">Image</th>
                                <th width="22%">Manga Title</th>
                                <th width="15%">Author</th>
                                <th width="10%">Genres</th>
                                <th width="8%">Score</th>
                                <th width="20%">Save the Manga</th>
                            </tr>
                        </thead>
                        <tbody>
                            {booklists.filter(booklist => booklist.genres === "Mystery").sort(function(a,b){return b.score-a.score}).slice(0,10)
                            .map(booklist => {
                            return <tr key={booklist._id}>
                                <td>{i ++}</td>
                                <td><img src={booklist.cover} alt="cover" /></td>
                                <td>{booklist.title}</td>
                                <td>{booklist.author}</td>
                                <td>{booklist.genres}</td>
                                <td>{booklist.score}</td>
                                <td>
                                <ButtonGroup>
                                    <Button color="success" outline size="sm" href={`/booklists/${booklist._id}`}>
                                        Details                                
                                    </Button>
                                    <Button
                                        size="sm"
                                        color="secondary"
                                        outline
                                        onClick={() => props.handleSave(booklist)}
                                    >Save to my booklist</Button>
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
