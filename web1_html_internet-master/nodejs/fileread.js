var fs = require('fs');
fs.readdir('./data', function(err, data){
  console.log(data);
});