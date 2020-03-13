
import readline from 'readline';
import {People} from './classExport.mjs';

const rl = readline.createInterface({

input: process.stdin,

output: process.stdout
});

rl.question('What is your name? : ', (name) => {
    rl.question('what is yout matricno : ', (matricno) => {
        rl.question('What is your major : ', (major) => {

            let student = new People (name, matricno, major)
            console.log(student.display());
            rl.close();
        });
    });
});

