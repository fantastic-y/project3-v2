import React from 'react';
import { Button, Container, Form, Col, 
    FormGroup, Label, Input, FormText } from 'reactstrap';
// import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

export default function Request() {

    return(
        <Container>
            <h2>Make a Request</h2>
            <Form>
                <FormGroup row>
                    <Label
                    for="exampleEmail"
                    sm={2}
                    >
                    Email
                    </Label>
                    <Col sm={10}>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Contact email address"
                        type="email"
                    />
                    </Col>
                </FormGroup>
                
                <FormGroup row>
                    <Label
                    for="exampleSelect"
                    sm={2}
                    >
                    Select
                    </Label>
                    <Col sm={10}>
                    <Input
                        id="exampleSelect"
                        name="select"
                        type="select"
                    >
                        <option>
                        Wrong Manga info
                        </option>
                        <option>
                        Out-of-date Manga info
                        </option>
                        <option>
                        Incompleted Manga info
                        </option>
                        <option>
                        Others
                        </option>
                    </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                    for="exampleText"
                    sm={2}
                    >
                    Details
                    </Label>
                    <Col sm={10}>
                    <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                    />
                    </Col>
                </FormGroup>
                <FormGroup
                    check
                    row
                >
                    <Col
                    sm={{
                        offset: 2,
                        size: 10
                    }}
                    >
                    <Button>
                        Submit
                    </Button>
                    </Col>
                </FormGroup>
                </Form>
        </Container>
    )
}
