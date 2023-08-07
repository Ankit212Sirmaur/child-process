```
    exec command are useful for small execution task like pwd, dir 
    NOT for find / 
    it give an error 
    error: RangeError [ERR_CHILD_PROCESS_STDIO_MAXBUFFER]: stdout maxBuffer length exceeded

    ✅ because all the data are stored in the buffer not in stream pipe
```

- In a Windows environment, .sh shell scripts are not executable by default. They are intended to be run within a Unix-like shell environment. If you still want to use execFile to execute a shell script on Windows, you would need to provide the appropriate shell executable along with the script as an argument.
```
const { execFile } = require('child_process');
const shellExecutable = 'bash'; // or provide the path to bash.exe if not in PATH
const scriptPath = './someFile.sh';

execFile(shellExecutable, [scriptPath], (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing script: ${error}`);
        return;
    }
    if (stderr) {
        console.error(`Script produced an error: ${stderr}`);
        return;
    }
    console.log(`Script output: ${stdout}`);
});
```