const LinkedList = require('./linked-list');

const ll = new LinkedList();
ll.append('element-1');
ll.append('element-2');
ll.insert('element-1', 'element-3');
console.log(ll.getList().map((i) => i.element));
// ['element-1', 'element-3', 'element-2']

ll.remove('element-3');
console.log('');
console.log(ll.getList().map((i) => i.element));
// ['element-1', 'element-2']

ll.remove('element-2');
console.log('');
console.log(ll.getList().map((i) => i.element));
// ['element-1']
