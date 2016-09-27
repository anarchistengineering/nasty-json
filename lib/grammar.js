const fs = require('fs');
const path = require('path');
const ohm = require('ohm-js');

const grammarPath = path.resolve(__dirname, 'nasty-json.ohm');
const grammarSource = fs.readFileSync(grammarPath, {encoding: 'utf-8'});
module.exports = ohm.grammar(grammarSource);
