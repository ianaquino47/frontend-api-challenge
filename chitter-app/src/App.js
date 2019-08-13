import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from  'react-router-dom';
import Header from './components/layout/Header'
import Peeps from './components/Peeps';
import About from './components/pages/About';
import AddPeep from './components/AddPeep';
import Login from './components/authentication/Login';
// import Registration from './components/authentication/Registration';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    peeps: [],
    logged_in_status: false,
    user_id: sessionStorage.getItem('user_id'),
    session_key: sessionStorage.getItem('session_key')
  }


  componentDidMount() {
    axios
    .get('https://chitter-backend-api.herokuapp.com/peeps')
    .then(res => this.setState({ peeps: res.data}))
  }


  delPeep = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`,
    {headers: {
      "Authorization": `Token token=${this.state.session_key}`
    }}
    ).then(res => this.setState({peeps: [...this.state.peeps.filter(peep => peep.id !== id)]}))
  }

  addPeep = (peep) => {
    axios.post(
      'https://chitter-backend-api.herokuapp.com/peeps',
      {"peep": {"user_id":this.state.user_id, "body":peep}},
      {headers:{
        "Authorization": `Token token=${this.state.session_key}`,
        "Content-Type": "application/json"
      }})
    .then(res => {
      console.log("peep posted!")
      this.setState({peeps: [res.data,...this.state.peeps]})
      }
    );
  }

  render() {
    // let registration = null
    // if (this.state.logged_in_status) {
    //   registration = <div>Logout</div>
    // } else {
    //   registration = <Registration/>
    // }
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
               <React.Fragment>
                 <Login />
                 <AddPeep addPeep= {this.addPeep}/>
                 <Peeps peeps={this.state.peeps} delPeep={this.delPeep}/>
               </React.Fragment>
            )} />
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
   );
  }
}

export default App;
