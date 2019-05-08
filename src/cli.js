export function cli(args){
    
var fs = require("fs");
var constants = {};
try {
    constants = JSON.parse(fs.readFileSync("assets/settings.json", 'utf8'));


    if(args.lenght==2){
        console.log(constants);
        console.log(args);
        }else{
            switch (args[2]) {
                case "config":
                let config = require("../src/config");
                config.config(constants);
                break;
                case "help":
                    console.log("grab : dcu -g -n "+constants.url+" -k "+constants.key+" -g -c");
                break;
                case "verbose":
                    console.log("grab : dcu -g -n "+constants.url+" -k "+constants.key+" -g -c");
                break;
            
                case "grab":
                    console.log("dcu -g -n "+constants.url+" -k "+constants.key+" -g -c");
                break;

                case "send-file":
                    console.log("dcu -g -n "+constants.url+" -k "+constants.key+" -g -c");
                break;

                case "send-module":
                    console.log("dcu -g -n "+constants.url+" -k "+constants.key+" -g -c");
                break;

                case "new-widget":
                console.log("dcu -g -n "+constants.url+" -k "+constants.key+" -g -c");
                break;

                case "new-gateway":
                console.log("dcu -g -n "+constants.url+" -k "+constants.key+" -g -c");
                break;

                case "new-sse":
                console.log("dcu -g -n "+constants.url+" -k "+constants.key+" -g -c");
                break;
        
                default:
                console.log(constants);
                console.log(args);
                break;
            }
        }


} catch (error) {
    console.log("before start you need to config");
    let config = require("../src/config");
    config.config(constants);
}

}