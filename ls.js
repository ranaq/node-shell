// module.exports = function(done) {
//   const fs = require('fs');

//   fs.readdir('./', 'utf8', (err, files) => {
//     if (err) {
//       throw err;
//     } else {
//       done(process.stdout.write(files.join('\n')))
//       // done(process.stdout.write('\nprompt > '))
//     }
//   })
// }
const fs = require('fs');
module.exports=(done)=>{
  fs.readdir('./','utf8',(err,files)=>{
    if(err){
      done('Something went wrong!')}
      else{
        done(files.join('\n'))
      }
    })
  }
