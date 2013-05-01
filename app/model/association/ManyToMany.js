module.exports = function(model){
  var Project = model.project,
		User = model.user;
		
		
	Project.hasMany(User);
	User.hasMany(Project);
}
