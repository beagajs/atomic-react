import React from 'react';

import {
  ButtonContent,
  ButtonLabel,
} from './style';

function Button (props) {
  return(
    <ButtonContent>
      <ButtonLabel>{props.label}</ButtonLabel>
    </ButtonContent>
  )
}

export default Button;