nasty-json
===

**REQUIRES NODE v6+**

Parsing the nastiest input as JSON.

Can your JSON parser handle this, cuz nasty-json can:

```
{
  "Foo": "Bar",
  Some: "Value",
  Foo.Some: "value",
  $Bla: 1234,
  _tesT: balu,
  another: chcu~!@#$%^&*()_+`-=\/;:|,
  long_test: This is a long test string,
  commaString: "This string contains a , that's a comma boy",
  curlyString: "This string contains {}, that's a set of curly braces",
  foo-bar_$~!@#$%^&*()_+: 'test',
  foo: {
      bar: none,
    },
  neg: -1234.567e32,
  arr: [
    long string,
    won't work,
    'single quote string',
    "double quote string",
    `Template strings FTW`,
    what
    multiline,
    1234,
    12.345,
    1e6,
    1.4e6,
    {obj: value},
    false, true,
    undefined,
    Null,
    [child array],
```

Install
---

```
npm install --save nasty-json
```

Usage
---

```js
const nasty = require('./nasty-json');

const parsed = nasty.parse(nastySource);
```

Attribution
---

Built with Ohm https://github.com/cdglabs/ohm
