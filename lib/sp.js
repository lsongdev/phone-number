const fs    = require('fs');
const path  = require('path');
const CONST = require('./const');

function parseServiceProvider(){
  var serviceProviders = {};
  fs.readFileSync(path.resolve(__dirname, '../data/sp.txt'), 'utf-8')
  .split(CONST.TAG.EOL)
  .filter(function(line){
    return !!line;
  }).forEach(function(line){
    var id_and_brand = line.split(',');
    serviceProviders[ id_and_brand[0] ] = id_and_brand[1];
  });

  return serviceProviders;
}

module.exports = parseServiceProvider();
