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

Why?
---

Why not.

Install
---

```
npm install --save nasty-json
```

Test
---

```
npm test
```

Usage
---

```js
const nasty = require('./nasty-json');

const parsed = nasty.parse(nastySource);
```

Help, support, pull request
---

https://github.com/anarchistengineering/nasty-json/issues

Attribution
---

Built with Ohm https://github.com/cdglabs/ohm

License
---

ISC License (ISC)
Copyright (c) 2016, Anarchist Engineer (Jeremy Darling)

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
