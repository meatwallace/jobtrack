import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './Names.css';
import ApiService from '../services/ApiService';

class Names extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: 'SomeGuy'
    };
  }

  componentDidMount() {
    var apiService = new ApiService();
    apiService
      .getAnotherUser()
      .then(response => {
        this.setState({user:response});
      });
  }

  render() {
    var apiService = new ApiService();

    return (
      <div className="Names Container">
        <br/>
        <TextField value={this.state.user}/>
      </div>
    );
  }
}

export default Names;