# Denest

## Usage

```javascript
var denest = require('denest');
denest({a:{b:['blargh', {c: 'bleep'}]}}, 'a.b[1].c');
```

Will return `'bleep'`.

## Tests

```bash
npm test
```

100% code coverage, let's keep it that way.
