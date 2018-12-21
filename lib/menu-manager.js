const inquirer = require('inquirer');
const files = require('./files')

module.exports = {
    askGithubCredentials: () => {
        const questions = [{
                name: 'username',
                type: 'input',
                message: 'Enter your GitHub username or e-mail address:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter your username or e-mail address.';
                    }
                }
            },
            {
                name: 'password',
                type: 'password',
                message: 'Enter your password:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter your password.';
                    }
                }
            }
        ];

        return inquirer.prompt(questions);
    },
    mainMenu: () => {
        const questions = [{
            name: 'main_action',
            type: 'list',
            choices: [{
                    name: 'Deploy Middleware',
                    value: 'middleware-deploy'
                }, {
                    name: 'Deploy LogViewer',
                    value: 'logviewer-deploy'
                },
                {
                    name: 'Deploy Routing-service',
                    value: 'routing-deploy'
                }, {
                    name: 'Exit',
                    value: 'exit'
                }
            ]
        }];

        return inquirer.prompt(questions);
    }
}