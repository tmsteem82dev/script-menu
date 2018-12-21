const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');

const files = require('./lib/files');

const menu_man = require('./lib/menu-manager');

clear();
console.log(
    chalk.yellow(
        figlet.textSync('ViQ DevOps', {
            horizontalLayout: 'full'
        })
    )
);

const run = async () => {
    var selection;
    while (true) {
        if (!selection) {
            selection = await menu_man.mainMenu();
            console.log(selection);
        } else {
            switch (selection.main_action) {
                case 'logviewer-deply':
                    console.log("Deploying logviewer to container instances.");
                    process.exit();
                    break;
                case 'middleware-deploy':
                    console.log("Deploying middleware to kubernetes.");
                    process.exit();
                case 'exit':
                    process.exit();
                    break;
                default:
                    console.log("option not available");
                    selection = undefined;
                    break;
            }
        }
    }


}

run();