import React, {Component} from 'react';
import './Styles.css';
import 'ui-neumorphism/dist/index.css'

//  importing all screens
import HomeScreen from './screens/HomeScreen/index.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screen: "Home",
    }
  }

  render() {
    return <HomeScreen />;
  }
}

export default App;
