import React from 'react'


const Post = (props) => {
    console.log(props)
    const buttonText = "like!";
    return (
        <div className="content">{props.children}
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText}
            </button>

        </div>

        );
}

export default Post;