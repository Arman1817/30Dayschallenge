const fs = require('fs')

function readFileContent(filepath) {
    fs.readFile(filepath, (err, data) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(`The Contents of file are:\n ${data}`);
        }
    })

}
readFileContent('file1.txt')
readFileContent('empty-file.txt')
readFileContent('nofile.txt')