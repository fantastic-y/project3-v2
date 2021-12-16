import React from 'react';
import { useParams } from 'react-router-dom';
// import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

export default function MangaDetails({booklists}) {
    const { id }= useParams();

    return(
        <>
        {booklists.filter(manga => manga._id === id)
        .map(manga => 
            ( <div>
            <h1>{manga.title}</h1>
            <h2>test</h2>
            </div>
        ))
        }
        </>
    )
}