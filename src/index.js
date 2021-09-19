import React from 'react';
import ReactDOM from 'react-dom';
import ImageComponent from './ImageComponent';
import Post from './Post'

const App = () => {

    return (
        <div className="ui cointainer post">
            <Post>
                <ImageComponent index="1" />
            </Post>
            <Post>
                <ImageComponent index="2" />
            </Post>
            <Post>
                <ImageComponent index="3" />
            </Post>
            <Post>
                <ImageComponent index="4" />
            </Post>
        </div>
    );
};


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);