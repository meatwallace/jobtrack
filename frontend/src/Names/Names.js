import './Names.css';

import TextField from 'material-ui/TextField';
import React, {Component} from 'react';
import ApiService from '../services/ApiService';

class Names extends Component {
  // skipped the constructor and defined these as class fields
  apiService = new ApiService();
  state = { userAndJob: 'SomeGuyAndSomeJob' }

  // when defining prop types on a class component, define them as statics
  // static propTypes = { ... };
  // static defaultProps = { ... };

  // converted to async/await - check notes in ApiService
  async componentDidMount() {
    const userAndJob = await this.apiService.getUserAndJob();

    // this isn't required at the moment, but depending how complex this component grows, it may.
    // thought it was worth illustrating that you can use `setState` with a callback.
    // `setState` actually updates `this.state` asynchronously, so if you ever want to do something like
    // a counter, this is highly important ex. `this.setState(prev => ({ count: prev.count++ }))`
    this.setState((prevState) => ({ userAndJob }))
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
