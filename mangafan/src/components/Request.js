import React from 'react';
import { Button, Container, Form, Col, 
    FormGroup, Label, Input, Card, CardImg } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import requestbanner from './img/request_banner.jpg';
import "./css/styles.css";

export default function Request() {

    return(
        <Container>
            <Card className="request-card" inverse>
                <CardImg
                    className='request-banner'
                    alt="request_banner"
                    src={requestbanner}
                />
            </Card>
            <br></br>
            <h2>Make a Request</h2>
            <br></br>
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
                        required
                    />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                    for="examplePhone"
                    sm={2}
                    >
                    Contact (optional)
                    </Label>
                    <Col sm={10}>
                    <Input
                        id="examplePhone"
                        name="phone"
                        placeholder="Contact phone number"
                        type="phone"
                    />
                    </Col>
                </FormGroup>
                <FormGroup tag="fieldset">
                <legend>
                How would you like us to contact you?
                </legend>
                <FormGroup check>
                <Input
                    name="email"
                    type="radio"
                />
                {' '}
                <Label check>
                    Email
                </Label>
                </FormGroup>
                <FormGroup check>
                <Input
                    name="phone"
                    type="radio"
                />
                {' '}
                <Label check>
                    Phone
                </Label>
                </FormGroup>
                <FormGroup check>
                <Input
                    name="nocontact"
                    type="radio"
                />
                {' '}
                <Label check>
                    Do not contact me
                </Label>
                </FormGroup>
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
                        required
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
                    <Button type="submit">
                        Submit
                    </Button>
                    </Col>
                </FormGroup>
                </Form>
        </Container>
    )
}
