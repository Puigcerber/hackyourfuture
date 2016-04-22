'use strict';

module.exports = function(app) {
  app.use('/api/hackers', require('./api/hacker'));

  app.route('/*')
    .get(function(req, res) {
      res.sendFile('index.html', { root: app.get('appPath') });
    });
};
