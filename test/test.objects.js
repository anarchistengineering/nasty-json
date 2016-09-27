const Code = require('code');   // assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const nasty = require('../');

const testIt = (src, expected, done)=>{
  const out = nasty.parse(src);
  expect(out).to.be.an.object().and.to.equal(expected);
  done();
};

describe('Objects', ()=>{
  it('parses an empty object', (done)=>{
    testIt('{}', {}, done);
  });

  it('parses a basic object', (done)=>{
    testIt('{"foo": "Bar"}', {foo: 'Bar'}, done);
  });

  it('parses an embedded object', (done)=>{
    testIt('{"foo": {"another": "Bar"}}', {"foo": {"another": "Bar"}}, done);
  });

  it('parses a non escaped key', (done)=>{
    testIt('{foo: "bar"}', {foo: 'bar'}, done);
  });

  it('parses a non escaped key with dots', (done)=>{
    testIt('{foo.bar: "none"}', {'foo.bar': 'none'}, done);
  });

  it('parses non quoted string values', (done)=>{
    testIt('{foo: chcu~!@#$%^& \t*()_+`-=\\/;:|}', {foo: 'chcu~!@#$%^& \t*()_+`-=\\/;:|'}, done);
  });

  it('parses multi line non quoted string values', (done)=>{
    testIt('{foo: bar\nnone}', {foo: 'bar\nnone'}, done);
  });
});
