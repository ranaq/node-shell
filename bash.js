const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

// Output a prompt
process.stdout.write('prompt > ');

const done=(output)=>{

}

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the newLine
  const catter = data.toString().trim().split(' ')

  console.log("CATTER", catter);

  if (catter[0] === 'cat') {
    cat(catter[1]);
  } 
  if (catter[0] === 'curl') {
    curl(catter[1]);
    
  } if (cmd === 'pwd') {
    pwd();
  } if (cmd === 'ls') {
    ls();
  } 
  
  else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});


