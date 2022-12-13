// __index.js__
/* eslint-disable arrow-body-style */
// https://docs.cypress.io/guides/guides/plugins-guide.html

// if you need a custom webpack configuration you can uncomment the following import
// and then use the `file:preprocessor` event
// as explained in the cypress docs
// https://docs.cypress.io/api/plugins/preprocessors-api.html#Examples

// /* eslint-disable import/no-extraneous-dependencies, global-require */
// const webpack = require('@cypress/webpack-preprocessor')

module.exports = (on, config) => {
    // on('file:preprocessor', webpack({
    //  webpackOptions: require('@vue/cli-service/webpack.config'),
    //  watchOptions: {}
    // }))
  
    return Object.assign({}, config, {
      fixturesFolder: "src/__tests__/e2e/fixtures",
      integrationFolder: "src/__tests__/e2e/specs",
      screenshotsFolder: "src/__tests__/e2e/screenshots",
      videosFolder: "src/__tests__/e2e/videos",
      supportFile: "src/__tests__/e2e/support/index.js"
    });
  };