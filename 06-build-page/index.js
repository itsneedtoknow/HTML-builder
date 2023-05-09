const { dir } = require('console');
const fs = require('fs');
const path = require('path');
// const fsPromises = fs.promises;

// create folder
fs.access(path.join(__dirname, 'project-dist'), err =>{

    if (err && err.code === 'ENOENT') {

        fs.mkdir(path.join(__dirname, 'project-dist'), err=>{
            if (err) throw err;
        }
        )}
    
    
    })

    // create html
    fs.access(path.join(__dirname, 'project-dist', 'index.html'), err =>{

        if (err && err.code === 'ENOENT') {
    
            fs.writeFile(path.join(__dirname, 'project-dist','index.html'), 'utf8', (err) =>{
        if (err) throw err;
        
        }
        )}
        })

// create css
        fs.access(path.join(__dirname, 'project-dist', 'style.css'), err =>{

            if (err && err.code === 'ENOENT') {
        
                fs.writeFile(path.join(__dirname, 'project-dist','style.css'), 'utf8', (err) =>{
            if (err) throw err;

            }
            )}
            })






// create assets
        fs.access(path.join(__dirname, 'project-dist', 'assets'), err =>{

            if (err && err.code === 'ENOENT') {
        
                fs.mkdir(path.join(__dirname, 'project-dist','assets'), (err) =>{
            if (err) throw err;
            }
            )}
            })

// create fonts
fs.access(path.join(__dirname, 'project-dist', 'assets', 'fonts'), err =>{

    if (err && err.code === 'ENOENT') {

        fs.mkdir(path.join(__dirname, 'project-dist','assets', 'fonts'), (err) =>{
    if (err) throw err;
    })
    }
})

// create img
fs.access(path.join(__dirname, 'project-dist', 'assets', 'img'), err =>{

    if (err && err.code === 'ENOENT') {

        fs.mkdir(path.join(__dirname, 'project-dist','assets', 'img'), (err) =>{
    if (err) throw err;
    }
    )}
    })

    // create svg
fs.access(path.join(__dirname, 'project-dist', 'assets', 'svg'), err =>{

    if (err && err.code === 'ENOENT') {

        fs.mkdir(path.join(__dirname, 'project-dist','assets', 'svg'), (err) =>{
    if (err) throw err;
    }
    )}
    })












    // function copyDir() {
    //     if(isDir) copyDir()
    //    } 
// fs.readdir(path.join(__dirname, 'assets'), (err, files)=>{
//     if (err) throw err;
    
//     files.forEach(file=>{

//         fs.stat(path.join(__dirname, 'assets', file), (err, stat)=>{
            
//             if(err) throw err;
          
//             if(stat.isDirectory()){
                
//                 fs.access(path.join(__dirname, 'project-dist', 'assets', file), (err, file)=>{

//                     if(err && err.code ==="ENOENT"){
//                         console.log('error')
//                         // let fileName = path.basename(path.join(__dirname, 'assets', file),path.extname((path.join(__dirname, 'assets', file))));
//                         // console.log(fileName)

//                         fs.mkdir(path.join(__dirname, 'project-dist', 'assets', file )), err=>{
//                             if(err) throw err;
//                         // fs.copyFile(path.join(__dirname, 'assets', path.basename), path.join(__dirname,'project-dist', 'assets', file), err=>{
//                         //     if (err) throw err;
//                         //     console.log('dir copied')
//                         // })
                        
//             }}})
//                 }
//                 // fs.copyFile(path.join(__dirname, 'assets', path.basename(path.join(__dirname,'assets', file )), file), path.join(__dirname, 'project-dist','assets', path.basename(path.join(__dirname,'assets', 'project-dist', file )), file), err=>{
//                 //     if (err) throw err;
                    
//                 // })
//             })
            
                
                    
//             console.log(path.basename(path.join(__dirname,'assets', file )))
            
//         }
//         )
        



//         // fs.stat(path.join(__dirname, 'assets', file), (err, stat)=>{
//         //     if (err) throw err;
//         //     if (stat.isDirectory()){
//         //         fs.copyDi(path.join(__dirname, 'assets', file), path.join(__dirname, 'project-dist','assets', file), err=>{
//         //             if (err) throw err;
//         //             console.log('files copied')
//         //         })
//         //     }
//         // })
//     }
//         )





    // template = template.replace(`{{${componentName}}}`, componentContent);