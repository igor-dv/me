/* eslint-disable no-use-before-define */
const path = require('path');
const fs = require('fs');
const shelljs = require('shelljs');
const chalk = require('chalk');

const releaseDir = path.join(process.cwd(), './.out');
const logger = console;

deleteReleaseDir();
buildGatsby();
buildNuxt();

function logCommand(text) {
  logger.log(chalk`{green ${text}}`);
}

function deleteReleaseDir() {
  if (fs.existsSync(releaseDir)) {
    logCommand('Delete release dir');
    shelljs.rm('-rf', releaseDir);
  }
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

function buildNuxt() {
  logCommand('Build nuxt');
  shelljs.cd('./apps/nuxt');
  shelljs.exec('yarn generate');

  // logCommand('Build storybook for nuxt ');
  // shelljs.exec('yarn build-storybook');

  logCommand('Copy nuxt specific');
  shelljs.cp('-R', 'dist', path.join(releaseDir, 'nuxt'));

  shelljs.cd('../../');
}
