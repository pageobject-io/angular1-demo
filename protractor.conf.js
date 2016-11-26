exports.config = {
  directConnect: true,
  chromeDriver: 'node_modules/chromedriver/bin/chromedriver',
  // chromeDriver: 'node_modules/chromedriver/lib/chromedriver/chromedriver.exe',
  baseUrl: 'http://localhost:3000',
  specs: [
    'test/*.js'
  ],

  capabilities: {
    browserName: 'chrome'
  },

  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  }
};