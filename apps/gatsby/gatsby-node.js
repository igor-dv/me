const path = require('path');

const node_modules = 'node_modules';
const root = path.join(__dirname, '../../');
const commonNodeModules = path.join(root, node_modules);
const gatsbyNodeModules = path.join(commonNodeModules, 'gatsby', node_modules);
const appNodeModules = path.join(root, 'apps', 'gatsby', node_modules);
const loaders = path.join(commonNodeModules, 'gatsby', 'dist', 'loaders');

function overrideResolution(config) {
  config.merge(current => {
    current.resolveLoader.modulesDirectories = [
      loaders,
      gatsbyNodeModules,
      commonNodeModules
    ];

    current.resolve.modulesDirectories = [
      gatsbyNodeModules,
      appNodeModules,
      commonNodeModules
    ];

    return current;
  });
}

exports.modifyWebpackConfig = ( { config, stage } ) => {
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
    return;
  }

  console.log(stage);
};
