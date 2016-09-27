const Code = require('code');   // assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const nasty = require('../');

const testIt = (src, expected, done)=>{
  const out = nasty.parse(src);
  expect(out).to.be.a.number().and.to.equal(expected);
  done();
};

describe('Numbers', ()=>{
  it('parses integer values', (done)=>{
    testIt('123', 123, done);
  });

  it('parses float values', (done)=>{
    testIt('1.23', 1.23, done);
  });

  it('parses extended values', (done)=>{
    testIt('1.2e3', 1.2e3, done);
  });

  it('parses hex values', (done)=>{
    testIt('0xBAD', 2989, done);
  });
});
