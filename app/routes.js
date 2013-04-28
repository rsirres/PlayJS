module.exports = function(app){
  
	var ctrl = app.controller;
	
	
	app.get('/', ctrl.user.index);
}
