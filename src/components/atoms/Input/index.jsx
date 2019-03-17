import React, { Component } from 'react';

import {
  InputItem,
} from './style';

class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({ value: event.target.value });
  }
  render(){
    const { full } = this.props;
    const { value } = this.state;
    
    return(
      <InputItem
        type="text"
        full={full}
        onChange={this.handleChange}
        value={value}
        />
    )
  }
}

export default Input;