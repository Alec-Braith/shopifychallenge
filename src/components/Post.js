import React from 'react'
import LikeButton from './LikeButton'
import {Card,Container,Row} from 'react-bootstrap'

const Post = (props) => {

    console.log(props.children.props)
    return (



        <Card className="m-3" style={{ borderRadius: 15}} >
                
                    <Card.Img variant="top" src={props.children.props.src} />
                    <Card.Body>
                    <Card.Title>{props.children.props.title} - {props.children.props.date}</Card.Title>
                        <Card.Text>{props.children.props.description}</Card.Text>
                    </Card.Body>
                    <LikeButton></LikeButton>

                </Card>
          


        );
}

export default Post;