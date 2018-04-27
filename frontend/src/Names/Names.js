import React, {Component} from 'react';

import TextField from 'material-ui/TextField';
import ApiService from '../services/ApiService';

import './Names.css';

class Names extends Component {

  constructor(props) {
    super(props);
    this.apiService = new ApiService();
    this.state = {
      userAndJob: 'SomeGuyAndSomeJob'
    };
  }

  componentDidMount() {
    this.apiService
      .getUserAndJob()
      .then(response => {
        this.setState({userAndJob:response});
      });
  }

  render() {
    return (
      <div className="Names Container">
        <br/>
        <TextField value={this.state.userAndJob}/>
      </div>
    );
  }
}

export default Names;