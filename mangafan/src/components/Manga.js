import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, } from 'reactstrap';

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
                <Row>
                    <hr></hr>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={{offset: 2}}>
                        <h1>Comments</h1>
                    </Col>
                </Row>
                <br></br>
                <Row className="justify-content-md-center">
                        <Col xs={12} md={{offset:1, size:3}}>
                            <h5>FantasticFan</h5>
                            <p>Dec.17, 2021</p>
                            <p>Manga Score: 7.5</p>
                        </Col>
                        <Col xs={12} md={{size:7}} >
                            Comment section will be built in phase two of the project.Comment section will be built in phase two of the project.Comment section will be built in phase two of the project.Comment section will be built in phase two of the project.Comment section will be built in phase two of the project.
                        </Col>
                </Row>
                
            </Container>
        ))
        }
        </>
    )
}