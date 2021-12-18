import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, Row, Col, } from 'reactstrap';

export default function MangaDetails({booklists}) {
    const { id }= useParams();

    return(
        <>
        {booklists.filter(manga => manga._id === id)
        .map(manga => 
            ( <Container fluid>
                <br></br>
                <Row className="justify-content-md-center">
                    <Col md={{
                        offset: 0.5,
                        size: 4
                        }} 
                        xs={3}
                    >
                        <img src={manga.cover} alt="manga-img" width="100%"/>
                    </Col>
                    <Col
                        md={{
                            offset: 0.5,
                            size: 5
                        }}
                        xs={8}
                    >
                        <h1>{manga.title}</h1>
                        <h5>Manga Score: {manga.score}</h5>
                        <h5>Author: {manga.author}</h5>
                        <h5>Genres: {manga.genres}</h5>
                        <br></br>
                        <p>{manga.synopsis}</p>
                        
                    </Col>
                </Row>
                
            </Container>
        ))
        }
        </>
    )
}