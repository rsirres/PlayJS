var Sequelize =  require("sequelize");

var settings = {
  user : 'root',
	pass : 'root',
	port : '8889',
	database : 'sequel',
}


global.Sequelize = Sequelize;

module.exports = function(app){	
	db =  new Sequelize(settings.database, settings.user, settings.pass, {port: settings.port});
	
	
	
	return db;
};
