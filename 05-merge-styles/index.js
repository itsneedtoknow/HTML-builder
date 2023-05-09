const fs = require('fs');
const path = require('path');

fs.access(path.join(__dirname, 'project-dist', 'bundle.css'), err=>{
    if (err && err ==="ENOENT") throw err;

    fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'), err=>{
        if (err) throw err;
    })
})


fs.readdir(path.join(__dirname, 'styles'), (err, files)=>{
    if (err) throw err;

    files.forEach(file => {

        fs.stat(path.join(__dirname, 'styles', file), (err, stat)=>{

            if (err) throw err;
            
                let fileExt = path.extname(path.join(__dirname, 'styles', file));
                
                if(fileExt === '.css'){


                    let fileContent = fs.readFile(path.join(__dirname, 'styles', file),'utf8', (err, data)=>{

                        if (err) throw err;                

                    fs.appendFile(path.join(__dirname, 'project-dist', 'bundle.css'), data, (err)=>{
                        if (err) throw err;
                        
                    } )

                        
                    });
                    
                }
            

        })
    
    
});
})