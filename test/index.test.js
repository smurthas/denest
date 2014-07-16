var assert = require('assert');

var denest = require('../index');

describe('index', function() {

  it('should handle nested values', function() {
   var res = denest({
     a: {
      b: {
        c: 1
      }
    }
   }, 'a.b');

   assert.deepEqual(res, { c: 1 });
  });

  it('should handle nested arrays', function() {
   var res = denest({
     a: {
      b: [
        {},
        {
          c: 1
        }
      ]
    }
   }, 'a.b[1].c');

   assert.strictEqual(res, 1);
  });
});
