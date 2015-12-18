const fs = require('fs');
const path = require('path');
const CONST = require('./const');

function parseCountries(){
  return fs.readFileSync(path.resolve(__dirname, '../data/countries.txt'), 'utf-8')
    .split(CONST.TAG.EOL)
    .filter(function(line){
      return !!line;
    })
    .map(function(line){
      return line.split(',')
    });
}

module.exports = parseCountries();
