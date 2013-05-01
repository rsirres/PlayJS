var express    = require('express')
var app        = express()
var load       = require('express-load')
var lingua     = require('lingua')


// Inject root path
app.rootfolder = __dirname;


// 1. Load configuration
// 2. Load initializers
// 3. Load app( Model, etc.)
// 4. Router

load('config', {recursive: false}).into(app);

load('config/init').into(app, app.config.db, express, lingua);

load('app/controller', {level: 1}).then('app/view', {level: 1}).into(app, app.config.db);
load('app/model', {except: 'app/model/association', level: 1}).into(app, app.config.db, express);
load('app/model/association', {level: 1}).into(app.model); 

load('config/router').into(app, app.controller); 


console.log("PlayJs is listing on port %s", app.config.server.port);
app.listen(app.config.server.port);
