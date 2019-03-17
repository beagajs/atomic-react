import styled, { css } from 'styled-components';

import { grey } from '../../bosons/colors';

export const InputItem = styled.input`
  border: none;
  padding: 10px;
  color: black;
  border: 2px solid ${(props) => (props.value.length > 6) ? 'green' : grey};
  width: ${(props) => props.full ? '100%' : 'auto'};
  ${(props) => (props.value.length > 10) && css`
    margin-top: 10px;
    border-radius: 20px;
    color: yellow;
  `}
`;
