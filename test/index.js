const phone = require('..');
const assert = require('assert');

[
  { number: '13800138000', province: '北京', city: '北京', sp: '中国移动'  },
  { number: '18810516991', province: '北京', city: '北京', sp: '中国移动'  },
  { number: '18510100102', province: '北京', city: '北京', sp: '中国联通'  },
  { number: '15840181400', province: '辽宁', city: '沈阳', sp: '中国移动'  },
  { number: '13763575966', province: '黑龙江', city: '齐齐哈尔', sp: '中国移动'  },
].forEach(({ number, sp, city, province }) => {
  const o = phone(number);
  assert.equal(o.sp, sp);
  assert.equal(o.city, city);
  assert.equal(o.province, province);
});


assert(phone.is('13800138000', phone.CHINA_MOBILE));