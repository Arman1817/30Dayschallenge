const fs = require('fs')

function writeToFile(filepath, content) {
    fs.writeFile(filepath, content,(err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log('Writing to File..')
        }
    })

}
writeToFile('./output1.txt', 'Sample content.');
writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');