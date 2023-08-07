const { exec } = require("child_process");
const { error } = require("console");
const { stdout, stdin } = require("process");

exec('pwd', (error, stdout, stderr) => {
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
