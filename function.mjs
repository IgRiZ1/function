import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});


function maalDrie(num){
    return(num * 3 );
    
}


console.log(maalDrie(102));
process.exit()