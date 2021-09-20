import React from 'react';
import Post from './Post'
import {Container} from 'react-bootstrap'

const ImageList = (props) => {
    const images = props.images.map(({explanation, url,hdurl,date,title }) => {
        return(
        
        <Post key={hdurl}>
            <img src={url} description={explanation} title={title} date={date} alt={""}/>
            </Post>
            )
    });
    return (
        <Container className="justify-content-md-center" style={{ width: '50%', flex: 1 , backgroundColor:'lightgrey', borderRadius:15}} >
            <div className="mt-5" style={{ fontSize: '200%', fontWeight: 'bold' }} >Spacestagram</div>
            <div style={{color:'grey'}}> Brought to you by NASA's Astronomy Photo of the Day API </div>
            <div>{images}</div>
        </Container>

        )
        
}

export default ImageList