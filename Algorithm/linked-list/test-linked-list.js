const LinkedList = require('./linked-list');

const ll = new LinkedList(['element-1', 'element-2']);

console.log(ll.display());
/**
{
  "head": {
    "element": "element-1",
    "next": {
      "element": "element-2",
      "next": null
    }
  }
}
 */

ll.insert('element-1', 'element-3');
console.log(ll.getList().map((i) => i.element));
// ['element-1', 'element-3', 'element-2']

console.log(ll.display());
/**
{
  "head": {
    "element": "element-1",
    "next": {
      "element": "element-3",
      "next": {
        "element": "element-2",
        "next": null
      }
    }
  }
}
 */

ll.remove('element-3');
console.log('');
console.log(ll.getList().map((i) => i.element));
// ['element-1', 'element-2']

console.log(ll.display());
/**
{
  "head": {
    "element": "element-1",
    "next": {
      "element": "element-2",
      "next": null
    }
  }
}
 */

ll.remove('element-2');
console.log('');
console.log(ll.getList().map((i) => i.element));
// ['element-1']

console.log(ll.display());
/**
{
  "head": {
    "element": "element-1",
    "next": null
  }
}
 */
