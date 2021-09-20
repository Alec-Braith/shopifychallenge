import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

//GET https://api.nasa.gov/planetary/apod
//api key https://api.nasa.gov/planetary/apod?api_key=VdQaIphlzu2l4v9Xm3vh4eL5R4dXjt3GuZNPJyVo



ReactDOM.render(
    <App />,
    document.querySelector('#root')
);