import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('Atoms/Button', module)
  .add('with text', () => <Button label="Teste" />);
