import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {

    state = {lat: null, errorMessage: ''};
    
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
     //   console.log('my component was updated - it rerendert');
    }

    renderContent(){
        if(this.state.lat){
            return  <SeasonDisplay lat={this.state.lat} />
        }

        if(this.state.errorMessage){
            return <div>Error: {this.state.errorMessage}</div>
        }

        return (
            <Loader text="please allow to know your location" />
        )
    }

    render(){
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />,document.querySelector('#root'));
