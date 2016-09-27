const grammar = require('./grammar');
const semantics = grammar.createSemantics();

const quotedStringHandler = (_1, str, _2)=>{
  return str.children.map((c)=>c.parse()).join('');
};

const ESCAPE_SEQUENCES={
  b: '\b',
  f: '\f',
  n: '\n',
  O: '\O',
  r: '\r',
  t: '\t',
  v: '\v',
};

semantics.addOperation('parse', {
  Object_empty(_1, _2){
    return {};
  },
  Object_nonEmpty(_1, _first, _3, _other, _5, _6){
    const key = _first.children[0].parse();
    const value = _first.children[2].parse();
    const out = _other.children.reduce((o, c)=>{
      const key = c.children[0].parse();
      const value = c.children[2].parse();
      return Object.assign({}, o, {
        [key]: value
      });
    }, {[key]: value});
    return out;
  },
  Array_empty(_1, _2){
    return [];
  },
  Array_nonEmpty(_1, _first, _3, _other, _5, _6){
    return Array.prototype.concat.apply([_first.children[0].parse()],
      _other.children.map((item)=>item.children[0].parse()));
  },
  HexNumber(_1, _2){
    return parseInt(this.sourceString);
  },
  Number(_1){
    return parseFloat(this.sourceString);
  },
  Null(_1){
    return null;
  },
  Undefined(_1){
    return undefined;
  },
  True(_1){
    return true;
  },
  False(_1){
    return false;
  },
  doubleStringCharacter_escaped(_1, _esc){
    const c = _esc.children[0].parse();
    return ESCAPE_SEQUENCES[c]||c;
  },
  singleStringCharacter_escaped(_1, _esc){
    const c = _esc.children[0].parse();
    return ESCAPE_SEQUENCES[c]||c;
  },
  templateStringCharacter_escaped(_1, _esc){
    const c = _esc.children[0].parse();
    return ESCAPE_SEQUENCES[c]||c;
  },
  escapeSequence_codePoint(_1, seq){
    return String.fromCharCode(parseInt(seq.sourceString, 16));
  },
  escapeSequence_hex(_1, _f, _l){
    return String.fromCharCode(parseInt(_f.sourceString+_l.sourceString, 16));
  },
  escapeSequence_octal(_f, _m, _l){
    return String.fromCharCode(parseInt(this.sourceString, 8));
  },
  String(str){
    return str.children[1].parse().join('');
  },
  StandaloneString(_1){
    return this.sourceString;
  },
  identifierName(_1, _2){
    return this.sourceString;
  },
  _terminal(){
    return this.primitiveValue;
  },
});

const parse = (source)=>{
  const match = grammar.match(source);
  if(match.failed()){
    throw new Error(match.message);
  }
  return semantics(match).parse();
};

module.exports = {
  parse,
  semantics
};
