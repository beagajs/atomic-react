import React from 'react';
import Input from '../../atoms/Input';

import {
  TextFieldContainer,
} from './style';

function TextField (props) {
  return(
    <TextFieldContainer>
      <label>{props.label}</label>
      <Input />
    </TextFieldContainer>
  )
}

export default TextField;