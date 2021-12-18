import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/styles.css";

export default function AllNews(props) {
    const { newsLists }= props;

    const [show, setShow] = React.useState(true);
    const showheart = () => setShow(!show);

    return(
        <div>
            <div>
            <h3>Manga Animation News</h3>

            {newsLists.map( news => {
                return <div>
            <ListGroup key={news.id}>
                <ListGroupItem>

                    <img id="newsimg" alt="newsimg" src={news.img} />
                    <div>
                    <h4>{news.subjectline} {'  '}<FontAwesomeIcon icon={faHeart} className="icon" hidden={show}/></h4>
                    <p>{news.content}</p>
                    <p><span>{news.date} by </span>{news.author}</p>
                    <Button
                        color="success"
                        onClick={showheart}
                    >I like it!</Button>
                    </div>
                </ListGroupItem>
            </ListGroup>
                </div>}
                )}

                </div>  
            </div>
    )
}