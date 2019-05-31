import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter} from 'react-router-dom';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      focusedProduct: null
    }
    this.getInventory = this.getInventory.bind(this);
  }
  componentDidMount() {
    this.getInventory();
  }
  getInventory() {
    axios.get('/api/inventory') 
    .then(res => {
      console.log(res.data)
      this.setState({
        inventory: res.data
      })
    })
    .catch(err => console.log(err));
  }
  render() {
    return (
      <HashRouter>

        <Header />
        
        <Dashboard inventory={this.state.inventory} getInventory={this.getInventory} />

        <Form getInventory={this.getInventory} focusedProduct={this.props.focusedProduct} />      

      </HashRouter>
    );
  }
}

export default App;
