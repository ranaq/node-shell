module.exports = function(arg) {
  const fs = require('fs');

  console.log("ARG", arg);

  fs.readFile('./' + arg, 'utf8', (err, file) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(file);
      process.stdout.write('\nprompt > ');
    }
  })

  // process.stdout.write(arg);
  // process.stdout.write('\nprompt > ');
}
