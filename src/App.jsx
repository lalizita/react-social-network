import React, { Component } from 'react';
import logo from '../assets/img/react.png';
import '../assets/styles/bootstrap/bootstrap.scss';
import './index.scss';
import Base from '../views/Base.jsx';

class App extends Component {
    constructor(props){
        super(props)
          this.state = {date: new Date()}
      }
  render() {
    return (
    <Base/>
    );
  }
}

export default App;
