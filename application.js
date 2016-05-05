var browserify = require('browserify'),
    stringify = require('stringify');

var bundle = browserify()
    .transform(stringify, {
			appliesTo: { includeExtensions: ['.mjson'] }
		})
    .addEntry('main.js');

app.use(bundle);
