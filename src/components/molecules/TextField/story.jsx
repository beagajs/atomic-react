import React from 'react';

import { storiesOf } from '@storybook/react';

import TextField from './index';

storiesOf('Molecules/TextField', module)
  .add('default', () => <TextField label="Teste" />);
