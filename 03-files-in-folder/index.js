const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), (err, files) =>
{if (err) throw err;
files.forEach(file =>{
    
    fs.stat(path.join(__dirname, 'secret-folder', file), (err, stats)=>{
        if(err) throw err;
        
            if(stats.isFile()){ 
            let fileName = path.basename(path.join(__dirname, 'secret-folder', file),path.extname((path.join(__dirname, 'secret-folder', file))));
            let extName = path.extname(path.basename(path.join(__dirname, 'secret-folder', file)));
            let fileSize = stats.size;
            console.log(`Filename: ${fileName}, extention: ${extName}, size: ${fileSize}`)       
            }
            
    })
    
})

})


