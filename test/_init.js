assert = require('assert');
jsio = require('jsio');

// Add jsio default path
var path = require('path');
jsio.addPath(path.join(__dirname, '..', 'node_modules', 'jsio', 'packages'));

jsio.path.cache.GameKit = path.join(__dirname, '..', 'js');
