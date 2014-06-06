/* jshint node:true */
var       fs = require('fs'),
     express = require('express'),
      stylus = require('stylus');

var app = express();
app.set('port', process.env.PORT || 3000);

var sessOptions = {
  key: 'angular-app.sid',
  secret: 'my secret'
};

var devConfig = function () {
  'use strict';

  app.use(express.favicon());
  app.use(stylus.middleware({
    debug: true,
    src: 'client',
    dest: 'client'
  }));
  app.use(express.static('client'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session(sessOptions));
  app.use(app.router);
  app.use(express.errorHandler());
};
app.configure('development', devConfig);
app.configure('localdev', devConfig);

var prodConfig = function () {
  'use strict';

  app.use(express.favicon());
  app.use(express.static('build'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session(sessOptions));
  app.use(app.router);
};
app.configure('staging', prodConfig);
app.configure('production', prodConfig);

fs.readdirSync(__dirname + '/routes').forEach(
  function (file) {
    'use strict';

    require('./routes/' + file)(app);
  }
);

app.listen(app.get('port'),
  function () {
    'use strict';

    console.log('Express server listening on port ' + app.get('port') + ' in environment ' + app.get('env'));
  }
);
