const fs = require('fs');

const countries         = require('./lib/countries');
const areas             = require('./lib/area');
const serviceProviders  = require('./lib/sp');
const phoneNumbers      = require('./lib/numbers');

module.exports = function(number){

  var country;
  var regexp = /^(\+|00)/;
  if(regexp.test(number)){
    number = number.replace(regexp, '');
    country = countries.filter(function(country){
      return number.indexOf(country[0]) == 0;
    }).sort(function(a, b){
      return a.length - b.length;
    });
    if(country.length){
      country = country[0];
      number = number.substr(country[0].length);
    }else{
      throw new Error('can not resolve country form mobile number .');
    };
  }
  var part  = parseInt(number.substr(0, 3), 10);
  var index = parseInt(number.substr(3, 4), 10);

  var area_and_type = phoneNumbers[ part ][ index ].split(',');
  var area = area_and_type[0];
  var type = area_and_type[1];

  var province_and_city =  areas[area].split(' ');

  return {
    country   : country ? country[2] : '中国',
    province  : province_and_city[0],
    city      : province_and_city[1],
    sp        : serviceProviders[type]
  };
};
