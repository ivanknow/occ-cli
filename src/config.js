export function config(constants){
        var fs = require("fs");
        
        constants = {"name":"","url":"","key":""};
        const readline = require('readline');
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        });

        rl.question('name:', (answer) => {
          
            constants.name = answer;
        
            rl.question('URL:', (answer) => {
          
                constants.url = answer;
                rl.question('key:', (answer) => {
          
                    constants.key = answer;
                    var json = JSON.stringify(constants);
                    fs.writeFile('assets/settings.json', json, 'utf8', function(){console.log("saved")});
                  rl.close();
                });
              
            });
        });
       
}