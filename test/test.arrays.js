const Code = require('code');   // assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const nasty = require('../');

const testIt = (src, expected, done)=>{
  const out = nasty.parse(src);
  expect(out).to.be.an.array().and.to.equal(expected);
  done();
};

describe('Arrays', ()=>{
  it('parses an empty array', (done)=>{
    testIt('[]', [], done);
  });

  it('parses an array with a string', (done)=>{
    testIt('["test"]', ['test'], done);
  });

  it('parses an array with a number', (done)=>{
    testIt('[123]', [123], done);
  });

  it('parses an array with an object', (done)=>{
    testIt('[{foo: bar}]', [{foo: 'bar'}], done);
  });

  it('parses an array with an array', (done)=>{
    testIt('[[]]', [[]], done);
  });
});
