import { configure } from '@storybook/react';

import '../src/layouts/index.css';

function importAll(req) {
  req.keys().forEach(filename => req(filename));
}

function loadStories() {
  const req = require.context('../src', true, /\.stories\.js$/);
  importAll(req);
}

configure(loadStories, module);
