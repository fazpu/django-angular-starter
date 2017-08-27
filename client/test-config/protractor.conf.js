require('ts-node/register');
const ports = require('../constants')
const helpers = require('../helpers');

exports.config = {
  baseUrl: 'http://localhost:8000/',

  specs: [
    helpers.root('e2e/**/**.e2e-spec.ts'),
    helpers.root('e2e/**/*.e2e-spec.ts'),
    helpers.root('e2e/**/**.e2e-spec.ts'),
    helpers.root('e2e/**/*.e2e-spec.ts'),

    helpers.root('src/**/**.e2e-spec.ts'),
    helpers.root('src/**/*.e2e-spec.ts'),
    helpers.root('src/**/**.e2e-spec.ts'),
    helpers.root('src/**/*.e2e-spec.ts')
  ],
  exclude: [],

  framework: 'jasmine2',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  onPrepare: function() {
    browser.ignoreSynchronization = true;
  },
  useAllAngular2AppRoots: true
};
