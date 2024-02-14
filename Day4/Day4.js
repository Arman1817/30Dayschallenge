const path = require('path')
function resolvePath(relativePath){
    const absolutePath = path.resolve(relativePath)
    console.log(`Resolve PAth: ${absolutePath}`)
}
resolvePath('../project/folder/file.txt');

resolvePath('nonexistent-folder/file.txt');
