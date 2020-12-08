'use strict';

const { exec } = require('child_process');
const ls = exec('EXEC CODE');
const ls2 = exec('EXEC CODE');

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});


ls2.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls2.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls2.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
