export function config(constants) {
    var fs = require("fs");
    const Store = require('data-store');
    const store = new Store({ path: 'config.json' });

    constants = { "name": "", "dcu_folder": "", "url": "", "key": "" };
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('name:', (answer) => {

        constants.name = answer;
        rl.question('dcu folder:', (answer) => {

            constants.dcu_folder = answer;

            rl.question('URL:', (answer) => {

                constants.url = answer;
                rl.question('key:', (answer) => {

                    constants.key = answer;
                    store.set('constants', constants);
                    rl.close();
                    
                });

            });
        });
    });

}