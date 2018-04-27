import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './Names.css';
import ApiService from '../services/ApiService';

class Names extends Component {
  render() {
    var apiService = new ApiService();

    return (
    <div className="Names Container">
    <br />
          <TextField defaultValue={ apiService.getUser() } />
          <br />
          <TextField defaultValue={ apiService.getJob() } />
      </div>
  );
  }
}

export default Names;