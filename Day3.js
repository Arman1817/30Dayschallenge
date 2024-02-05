const { exec }= require('child_process');

function executeCommand(command) {
    exec(command, (error, stdout,stderr) => {
        if(error){
            console.error(`Error executing command: ${error.message}`);
            return;
        }
        if(stderr){
            console.error(`Comaand stderr: ${stderr}`);
            return;
    
        }
        console.log(`command output:\n${stdout}`);
    });
}

executeCommand('ls -la');
executeCommand('echo Hello World!!');