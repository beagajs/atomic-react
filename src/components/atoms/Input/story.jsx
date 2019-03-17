import React from 'react';

import { storiesOf } from '@storybook/react';

import Input from './index';

storiesOf('Atoms/Input', module)
  .add('default', () => <Input />)
  .add('full', () => <Input full />);
