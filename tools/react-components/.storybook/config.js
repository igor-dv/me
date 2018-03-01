import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import '../src/common.css';

setOptions({
  addonPanelInRight: true,
});

function importAll(req) {
  req.keys().forEach(filename => req(filename));
}

function loadStories() {
  const req = require.context('../src/', true, /\.stories\.js$/);
  importAll(req);
}

configure(loadStories, module);
