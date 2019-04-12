const areas             = require('./lib/area');
const countries         = require('./lib/countries');
const phoneNumbers      = require('./lib/numbers');
const serviceProviders  = require('./lib/sp');
const phone             = require('china-mobile-phone-regexp');

function query(number){
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
  const part  = parseInt(number.substr(0, 3), 10);
  const index = parseInt(number.substr(3, 4), 10);

  const area_and_type = phoneNumbers[ part ][ index ].split(',');
  const area = area_and_type[0];
  const type = area_and_type[1];

  const province_and_city =  areas[area].split(' ');

  return {
    country   : country ? country[2] : 'N/A',
    province  : province_and_city[0],
    city      : province_and_city[1],
    sp        : serviceProviders[type]
  };
};

module.exports = Object.assign(query, phone);