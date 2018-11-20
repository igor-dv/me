import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

import '../src/pages/layout.css';

addDecorator(
  withOptions({
    addonPanelInRight: true,
  })
);

function importAll(req) {
  req.keys().forEach(filename => req(filename));
}

function loadStories() {
  const req = require.context('../src', true, /\.stories\.js$/);
  importAll(req);
}

configure(loadStories, module);
