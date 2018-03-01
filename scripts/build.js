const path = require('path');
const fs = require('fs');
const shelljs = require('shelljs');
const chalk = require('chalk');

const releaseDir = path.join(process.cwd(), './.out');

function logCommand(text) {
  console.log(chalk`{green ${text}}`);
}

function deleteReleaseDir() {
  if (!fs.existsSync(releaseDir)) {
    return;
  }

  logCommand('Delete release dir');

  shelljs.rm('-rf', releaseDir);
}

function buildGatsby() {
  logCommand('Build gatsby');
  shelljs.cd('./apps/gatsby');
  shelljs.exec('yarn build');

  logCommand('Copy gatsby');
  shelljs.cp('-R', 'public', releaseDir);

  logCommand('Build gatsby specific');
  shelljs.exec('yarn build --prefix-paths');

  logCommand('Build storybook for gatsby ');
  shelljs.exec('yarn build-storybook');

  logCommand('Copy gatsby specific');
  shelljs.cp('-R', 'public', path.join(releaseDir, 'gatsby'));

  shelljs.cd('../../');
}

deleteReleaseDir();
buildGatsby();
