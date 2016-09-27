const Code = require('code');   // assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const nasty = require('../');

const testIt = (src, expected, done)=>{
  const out = nasty.parse(src);
  expect(out).to.be.a.string().and.to.equal(expected);
  done();
};

describe('Strings', ()=>{
  it('parses double quote string values', (done)=>{
    testIt('"123"', '123', done);
  });

  it('parses escaped double quote string values', (done)=>{
    testIt('"12\\\"3"', '12\"3', done);
  });

  it('parses code points in string values', (done)=>{
    testIt('"12\\u00A9"', '12\u00A9', done);
  });

  it('parses hex characters in string values', (done)=>{
    testIt('"12\\x32"', '12\x32', done);
  });

  it('parses octal characters in string values', (done)=>{
    testIt('"12\\032"', '12\032', done);
  });

  it('parses backfeed characters in string values', (done)=>{
    testIt('"12\\b3"', '12\b3', done);
  });

  it('parses formfeed characters in string values', (done)=>{
    testIt('"12\\f3"', '12\f3', done);
  });

  it('parses newline characters in string values', (done)=>{
    testIt('"12\\n3"', '12\n3', done);
  });

  it('parses null characters in string values', (done)=>{
    testIt('"12\\O3"', '12\O3', done);
  });

  it('parses carriage return characters in string values', (done)=>{
    testIt('"12\\r3"', '12\r3', done);
  });

  it('parses tab characters in string values', (done)=>{
    testIt('"12\\t3"', '12\t3', done);
  });

  it('parses vertical tab characters in string values', (done)=>{
    testIt('"12\\v3"', '12\v3', done);
  });

  it('parses backslash characters in string values', (done)=>{
    testIt('"12\\\\3"', '12\\3', done);
  });

  it('parses non escape sequence characters in string values', (done)=>{
    testIt('"12\\q"', '12\q', done);
  });

  it('parses single quote string values', (done)=>{
    testIt('\'123\'', '123', done);
  });

  it('parses escaped single quote string values', (done)=>{
    testIt('\'12\\\'3\'', '12\'3', done);
  });

  it('parses template (`) quote string values', (done)=>{
    testIt('`123`', '123', done);
  });

  it('parses escaped template (`) quote string values', (done)=>{
    testIt('`12\\`3`', '12\`3', done);
  });
});
