var ini = 0;

process.argv.slice(2).map(function(num){
  ini += parseInt(num);
});

console.log(ini);
