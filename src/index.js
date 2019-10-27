import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {lat: null, errorMessage: ''};
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => { //sucess callback if he figured out an position guess
                this.setState({lat: position.coords.latitude})
            }
            , 
            (err) => { // error callback
                this.setState({errorMessage: 'Location could not loaded'})
            }
        );
    }

    componentDidUpdate(){
        console.log('my component was updated - it rerendert');
    }

    render(){

        if(this.state.lat){
            return (
                <div> 
                    Latitude: {this.state.lat} 
                </div>
            )
        }

        if(this.state.errorMessage){
            return <div>Error: {this.state.errorMessage}</div>
        }

        return <div>loading..</div>
    }
}

ReactDOM.render(<App />,document.querySelector('#root'));
