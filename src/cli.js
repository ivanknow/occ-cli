export function cli(args){
    
var fs = require("fs");
const Store = require('data-store');
const store = new Store({ path: 'config.json' });

var constants = {};
try {
    if(store.has('constants')){
        constants = store.get('constants');
    }else{
        throw "Too big"; 
    }
    


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
                if(args[3]){
                    let filepath = args[3]
                    console.log("dcu -t '"+filepath+"' -n "+constants.url+" -k "+constants.key+" ");
                }
                else{
                    console.log("you need to inform the file papth: occ-cli send-file /path/to/file.js");
                }
                break;

                case "send-module":
                if(args[3]){
                    console.log("dcu -g -n "+constants.url+" -k "+constants.key+" -g -c");
                }
                else{
                    console.log("you need to inform the module path: occ-cli send-module /path/to/module");
                }
                break;

                case "new-widget":
                console.log("not available yet");
                break;

                case "new-gateway":
                console.log("not available yet");
                break;

                case "new-sse":
                console.log("not available yet");
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