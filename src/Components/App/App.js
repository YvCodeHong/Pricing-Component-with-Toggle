import React from 'react';
import './App.css';
import logo from './bg-bottom.svg';
import top from './bg-top.svg';
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
            <img src={top} width="375" height="658"  alt="bg-top" />
                <h1>Our Pricing</h1>
            <div id="toggle-block">
                Annually
                <Switchtoggle searchToggle={this.state.on.value}
                />
                Monthly
            </div>
             <img src={logo} width="353" height="304" alt="bg-bottom" />
        </div>
        )
    }
}

export default App;