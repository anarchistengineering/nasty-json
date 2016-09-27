const Code = require('code');   // assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const fs = require('fs');
const path = require('path');

const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const nasty = require('../');
const NASTY_JSON = { Foo: 'Bar',
  Some: 'Value',
  'Foo.Some': 'value',
  '$Bla': 1234,
  _tesT: 'balu',
  another: 'chcu~!@#$%^&*()_+`-=\\/;:|',
  long_test: 'This is a long test string',
  commaString: 'Thisstringcontainsa,that\'sacommaboy',
  curlyString: 'Thisstringcontains{},that\'sasetofcurlybraces',
  'foo-bar_$~!@#$%^&*()_+': 'test',
  foo: { bar: 'none' },
  neg: -1.234567e+35,
  arr:
   [ 'long string',
     'won\'t work',
     'singlequotestring',
     'doublequotestring',
     'TemplatestringsFTW',
     'what\n    multiline',
     1234,
     12.345,
     1e6,
     1.4e6,
     { obj: 'value' },
     false,
     true,
     undefined,
     'Null',
     'child array' ] };

describe('Nasty JSON', ()=>{
  it('handles the nasty.json file', (done)=>{
    const src = fs.readFileSync(path.resolve(__dirname, './nasty.json')).toString();
    const out = nasty.parse(src);
    expect(out).to.be.an.object().and.to.equal(NASTY_JSON);
    done();
  });
});
