import React from 'react';
import './App.css';
import Switchtoggle from '../Switchtoggle/Switchtoggle';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            on: false,  
        };
    }

    render() {
     return (
            <div class="App">
                <h1>Our Pricing</h1>
            <div id="toggle-block">
                Annually
                <Switchtoggle searchToggle={this.state.on.value}
                />
                Monthly
            </div>
        </div>
        )
    }
}

export default App;