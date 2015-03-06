fs  = require('fs');

var path = process.argv[2];
var ext  = process.argv[3];

fs.readdir(path, function(err, list){
  if(err) throw err;
  list.forEach(function(item){
   if(item.indexOf(".") != -1){
    var itemExt = item.substring(item.lastIndexOf(".") + 1, item.length) 
    if(itemExt === ext)
      console.log(item)
   }
  });
});
