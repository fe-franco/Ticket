function promptForFileName(inquirer, answers = {}) {
	const prompts = inquirer.prompt(
        [{
			type: 'input',
			name: 'name',
			message: 'What is the NAME of the service?'
        },
        {
			type: 'input',
			name: 'file_name',
			message: 'What is the FILE NAME of the service?'
        },
        {
			type: 'confirm',
			name: 'wantImageLoader',
			message: 'Do you want add the image loader?'
		},
        {
			type: 'confirm',
			name: 'wantTimeStamp',
			message: 'Do you want to add timestamps?'
		},
        {
			type: 'confirm',
			name: 'wantSoftDelete',
			message: 'Do you want this model to have soft delete?'
        }]
      
    );

	prompts.then((newAnswers) => {
		Object.assign(newAnswers, answers);
	});

	return prompts;
}

function promptForQty(inquirer, answers = {}) {
	const prompts = inquirer.prompt({
		type: 'number',
		name: 'fqty',
		message: 'Field Quantity:'
	});

	prompts.then((newAnswers) => {
		Object.assign(newAnswers, answers);
	});

	return prompts
}

module.exports = function(inquirer) {
	const basePrompt = promptForFileName(inquirer);

	return basePrompt.then((answers) => {
		if (answers.wantEditFields) {
			return promptForQty(inquirer, answers);
		}

		return basePrompt;
	});
};