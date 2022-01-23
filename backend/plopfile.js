const prompts = require("./generator/prompts");

module.exports = function (plop) {

	plop.setGenerator('CRUD Logic', {
		description: 'application controller logic',
		prompts: prompts,
		actions: function(data) {
            var actions = [{
				type: 'add',
				path: 'src/routes/api/{{file_name}}.route.js',
				templateFile: 'generator/route.hbs'
			},
			{
				type: 'add',
				path: 'src/controllers/{{file_name}}.controller.js',
				templateFile: 'generator/controller.hbs'
			},
			{
				type: 'add',
				path: 'src/services/{{file_name}}.js',
				templateFile: 'generator/service.hbs'
			},
			{
				type: 'add',
				path: 'src/models/{{file_name}}.model.js',
				templateFile: 'generator/model.hbs'
			}]
	
			
			console.log(actions)
            return actions;
        } 
	});
};