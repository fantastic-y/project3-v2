import React from 'react';
import { Button } from 'reactstrap';

export default function SaveDelete(props) {
    let {props} = this.state;
    this.setState({saved: !props.saved});

    await fetch('http://localhost:8000/api/booklist', {
            method: (props._id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(props),
        });
    this.history.push('/booklists');
    
    const {item} = this.state;
    const savestatus =
        <p>
            {item.saved ? 'Delete' : 'Save'}
        </p>;


    return(
        <Button
                color="primary"
                type="submit"
                className="mt-3"
                onClick={() => this.handleSubmit()}
            >
            {savestatus}
        </Button>      
    );
}