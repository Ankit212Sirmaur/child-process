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

- spawn command

```
const child = spawn('find', ['/']);

const child = spawn('ls', [-lh']);
```

- fork child process

```
For long computation work use the chid process i.e frok 
Avoid to provide on main thread for long computaion work 
    ✅ => create a new process on separate thread using fork method
```

-to check the load on server 

```
 npm i loadtest 
 loadtest -n 10 -c 10 localhost:3000/one
 loadtest -n 10 -c 10 localhost:3000/two
 loadtest -n 10 -c 10 localhost:3000/three
```