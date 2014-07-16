var esprima = require('esprima');

module.exports = function(obj, nestedString) {
  var tree = esprima.parse(nestedString);
  tree = tree && tree.body && tree.body[0] && tree.body[0].expression;
  var stack = [];
  while(tree.type === 'MemberExpression' && tree.property) {
    stack.push(tree.property.name || tree.property.raw);
    tree = tree.object;
  }

  stack.push(tree.name);

  var value = obj;
  stack.reverse().forEach(function(key) {
    value = value[key];
  });

  return value;
};
