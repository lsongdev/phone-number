const fs = require('fs');
const path = require('path');
const CONST = require('./const')

function parseNumbers(){
  var numbers = {};
  var content = fs.readFileSync(path.resolve(__dirname, '../data/numbers.txt'), 'utf-8');
  //
  var matchs = content.match(/number-\d+/g);
  //
  content
  .split(/number-\d+/)
  .filter(function(line){
    return !!line.trim();
  }).forEach(function(part, i){
    numbers[ matchs[i].replace('number-', '') ] = part.split(CONST.TAG.EOL);
  });

  return numbers;
};

module.exports = parseNumbers();
