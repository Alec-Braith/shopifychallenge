import React from 'react';
import nasa from '../api/nasa';
import ImageList from './ImageList'
import { Spinner } from 'react-bootstrap'

class App extends React.Component {

    state = {
        images: [],
        loading: false
    };

    //data loading
    async componentDidMount() {
        this.setState({loading:true})//starts spinner
        try {
            const response = await nasa.get('/planetary/apod?api_key=VdQaIphlzu2l4v9Xm3vh4eL5R4dXjt3GuZNPJyVo', {
                params: { count: 4 },
            });
            this.setState({
                images: response.data,
                loading:false
            })
        }
        catch (error) {
            console.log('error occured!')
            console.log(error)
            this.setState({ loading: false })
        }
       

    }


    
    render() {
        console.log(this.state.images)
        if (this.state.loading == false) {
            return (
                <div className="ui cointainer">
                    <ImageList images={this.state.images} />
                </div>
            );
        } else {
            return (
                <div className="justify-content-md-center">
                    <Spinner className="position-absolute top-50 start-50" size ='lg'animation="border" role="status" >
                        <span className="visually-hidden">Loading...</span>
                        </Spinner>
                </div>
            );
        }
    }

}

export default App;