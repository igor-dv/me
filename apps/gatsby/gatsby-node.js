/* eslint-disable no-param-reassign */
const path = require('path');

const nodeModules = 'node_modules';
const root = path.join(__dirname, '../../');
const commonNodeModules = path.join(root, nodeModules);
const gatsbyNodeModules = path.join(commonNodeModules, 'gatsby', nodeModules);
const appNodeModules = path.join(root, 'apps', 'gatsby', nodeModules);
const loaders = path.join(commonNodeModules, 'gatsby', 'dist', 'loaders');

function overrideResolution(config) {
  config.merge(current => {
    current.resolveLoader.modulesDirectories = [loaders, gatsbyNodeModules, commonNodeModules];
    current.resolve.modulesDirectories = [gatsbyNodeModules, appNodeModules, commonNodeModules];

    return current;
  });
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'develop') {
    overrideResolution(config);
    return;
  }

  if (stage === 'build-javascript') {
    overrideResolution(config);
    return;
  }

  if (stage === 'build-html' || stage === 'develop-html') {
    overrideResolution(config);
    return;
  }

  if (stage === 'build-css') {
    overrideResolution(config);
  }
};
