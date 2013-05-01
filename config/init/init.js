module.exports = function(app, db, express, lingua){  
	
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	
	app.use(express.static(app.rootfolder + "/public"));
	app.set('views', app.rootfolder + '/app/view')
	app.set('view engine', 'jade')
	
	app.use(lingua(app, {
	        defaultLocale: 'en',
	        path: app.rootfolder + '/config/i18n'
	    }));
	
	app.use(express.session({
	        store: new express.session.MemoryStore(),
	        secret: app.config.server.secret,
	        key: 'PLAYJS_SESSION'
	    }));
	
	
};
