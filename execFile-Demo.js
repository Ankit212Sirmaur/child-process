const {execFile} = require('child_process');

const shellExecutable = 'bash'; // or provide the path to bash.exe if not in PATH
const scriptPath = './someFile.sh';
execFile(shellExecutable, [scriptPath], (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
  