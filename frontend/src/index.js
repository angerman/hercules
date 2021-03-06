'use strict';

// Require index.html so it gets copied to dist
require('./index.html');

var app = require('./Main.elm').Main.fullscreen({
  herculesURL: process.env.HERCULES_URL
});

app.ports.title.subscribe(function(title) {
  document.title = "Hydra - " + title;
});
