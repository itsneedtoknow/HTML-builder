const fs = require('fs');
const path = require('path');



fs.readdir(path.join(__dirname, 'files'), (err, files) =>{
    if(err) throw err;

    fs.access(path.join(__dirname, 'filescopy'), err =>{

        if (err && err.code === 'ENOENT') {
            console.log('no folder')
            fs.mkdir(path.join(__dirname, 'filescopy'), err=>{
                if (err) throw err;
            });}

            files.forEach(file =>{
            fs.stat(path.join(__dirname, 'files', file), (err, stat) =>{
            if(err) {throw err;}
            if (stat.isFile()){
            fs.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'filescopy', file), err =>{
            if(err) {throw err;}
            console.log('copied')
            });
        
             }
            })

        })
        
        
    })
    

})

