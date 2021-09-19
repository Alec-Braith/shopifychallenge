import React from 'react';
//import the database from redux

const ImageComponent = (props) => {
    let url = ""

    return (
        <div className="image">
            <div className="index"> {props.index}
            </div>
            <img alt = "photo" />
            <a href={url}>
                load image here
            </a>
            <div className="description"> Load description here. </div>
           
        </div>
        );
};


export default ImageComponent;