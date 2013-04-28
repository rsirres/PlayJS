var express    = require('express')
var app        = express()
var load       = require('express-load')




load('config', {recursive: false}).into(app);

load('app', {level: 1}).then('config/init').into(app, app.config.db);



console.log("PlayJs is listing on port %s", app.config.development.port);
app.listen(app.config.development.port)
