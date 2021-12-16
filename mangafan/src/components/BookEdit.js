import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

class BookEdit extends Component {
    emptyBook = {
        cover: '',
        title: '',
        author: '',
        genres: '',
        yourscore: '',
        saved: true,   
    };
    constructor(props){
        super(props);
        this.state = {
            item: this.emptyBook,
        };
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const book =
                await (await fetch(`http://localhost:8000/api/booklist/${this.props.match.params.id}`)).json();
            this.setState({item: book});
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {item} = this.state;

        await fetch('http://localhost:8000/api/booklist', {
            method: (item._id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/booklists');
    }
    
    render() {
        const {item} = this.state;
        const pagetitle =
            <h2 className="mt-3">
                {/* if item has an id number, otherwise */}
                {item._id ? 'Edit Your Score' : 'Add Manga'}
            </h2>;
        return(
            <div>
                <Container>
                    {/* display the appropriate title */}
                    {pagetitle}
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label
                                for="cover"
                                className="h5 mt-3"
                            >Manga Cover URL</Label>
                            <Input
                                type="url"
                                name="cover"
                                id="cover"
                                value={item.cover || ''}
                                onChange={this.handleChange}
                                autoComplete="cover"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label
                                for="title"
                                className="h5 mt-3"
                            >Manga Title</Label>
                            <Input
                                type="text"
                                name="title"
                                id="title"
                                value={item.title || ''}
                                onChange={this.handleChange}
                                autoComplete="title"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label
                                for="author"
                                className="h5 mt-3"
                            >Author</Label>
                            <Input
                                type="text"
                                name="author"
                                id="author"
                                value={item.author || ''}
                                onChange={this.handleChange}
                                autoComplete="author"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label
                                for="genres"
                                className="h5 mt-3"
                            >Genres</Label>
                            <Input
                                type="text"
                                name="genres"
                                id="genres"
                                value={item.genres || ''}
                                onChange={this.handleChange}
                                autoComplete="genres"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label
                                for="yourscore"
                                className="h5 mt-3"
                            >Your Score</Label>
                            <Input
                                type="number"
                                min="0"
                                max="10"
                                name="yourscore"
                                id="yourscore"
                                value={item.yourscore || ''}
                                onChange={this.handleChange}
                                autoComplete="yourscore"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button
                                color="primary"
                                type="submit"
                                className="mt-3"
                            >Save</Button>{' '}
                            <Button
                                color="secondary"
                                className="mt-3"
                                tag={Link} to="/booklists"
                            >Cancel</Button>
                        </FormGroup>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default withRouter(BookEdit);