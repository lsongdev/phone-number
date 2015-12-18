const fs = require('fs');
const path = require('path');
const CONST = require('./const');

function parseArea(){
  var areas = {};
  fs.readFileSync(path.resolve(__dirname, '../data/area.txt'), 'utf-8')
  .split(CONST.TAG.EOL)
  .forEach(function(line){
    var id_and_area = line.split(',');
    areas[ id_and_area[0] ] = id_and_area[1];
  })
  return areas;
}

module.exports = parseArea();
