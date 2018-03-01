import React from 'react';
import { storiesOf } from '@storybook/react';
import BrandLink from './BrandLink';

storiesOf('components/BrandLink', module).add('simple', () => (
  <BrandLink
    url="https://ig0r.me"
    alt="brand"
    src="https://image.flaticon.com/icons/svg/704/704822.svg"
  />
));
