module.exports = function(app, db){
  
	var User = db.define('User', {
	  username: Sequelize.STRING,
	  password: Sequelize.STRING
	})	
	
	return User;
}
