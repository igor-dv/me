import React from 'react';
import { storiesOf } from '@storybook/react';
import Greeting from './Greeting';

storiesOf('components/Greeting', module).add('simple', () => (
  <Greeting />
));
