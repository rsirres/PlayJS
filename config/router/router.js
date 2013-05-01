module.exports = function(app, controller){
  
	app.get('/user', controller.auth.authenticate,  controller.user.index);
	
	app.get('/login', controller.auth.index);
	app.post('/login', controller.auth.login);
	
}
