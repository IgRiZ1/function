import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});


 function tvserie(serie1){
    if(serie1 == 'dragonball'){
        console.log('Je gekozen TV-serie vind in japan ');
    } else {
        console.log('Sorry, ik weet niet waar de serie '+ serie1 +' zich afspeelt');
        
    }
    return(serie1)
 }
    tvserie('simpson')
    
    process.exit()