const fs = require('fs');
const path = require('path');
const process = require('process');
const { stdout, stdin } = process;

const writeStream = fs.createWriteStream(path.join(__dirname,'message.txt'), 'utf-8');

stdout.write('Enter your text below\n');


stdin.on('data', data => {
    
    if(data.toString().trim() ==='exit') {
        
        process.exit()
    } else {
        fs.appendFile(path.join(__dirname,'message.txt'), data, (err) =>{
            if(err) {throw err;}
        stdout.write('Enter your text below\n');
    }
    
)}})
process.on('SIGINT', () => process.exit());
process.on('exit', () => stdout.write('Удачи!'));







// process.on('exit', () => stdout.write('Удачи!'));













// const rl = readline.createInterface(stdin, stdout);

// rl.question('Enter you data\n ', (data) => {
//     if('data){
//         fs.appendFile(path.join(__dirname,'message.txt'), data);
//         stdout.write('Enter your text below\n');
//     }else if(err) {throw err;
//     }else  {rl.close();}
               
//         })

