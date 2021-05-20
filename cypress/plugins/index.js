/// <reference types="cypress" />

const codeCoveragePreprocessor = require('@cypress/code-coverage/task');
const webpackPreprocessor = require('./webpack-preprocessor.js');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  codeCoveragePreprocessor(on, config);
  on('file:preprocessor', webpackPreprocessor);
  return config;
};
