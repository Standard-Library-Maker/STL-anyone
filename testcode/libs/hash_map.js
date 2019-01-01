// Hash Map implemented by Jisoo
let Entry = function (key, value) {
  this.key = key;
  this.value = value;
  this.next = undefined;
  this.count = 0;
};

const HashMap = function () {
  this.map = [];
  this.length = 0;
};

// hash_map::put()
HashMap.prototype.put = function (key, value) {
  let newEntry = new Entry(key, value);   // make newEntry
  let hashCode = this.hash(key);          // find hashCode

  if (this.length === 0) {
    this.map[0] = newEntry;
    this.map[0].count++;
  } else if (this.length === 1) {
    let curEntry = this.map[0];
    for (let l = 0; l < this.map[0].count - 1; l++) {
      curEntry = curEntry.next;
    }
    curEntry.next = newEntry;
    this.map[0].count++;
  } else if (this.length === 2) {
    this.map[1] = newEntry;
    this.map[1].count++;
  }
  this.length++;
};

HashMap.prototype.test = function () {
  console.log(this.map);
};


// Hash_map::hash();
HashMap.prototype.hash = function (key) {
  return 0;
};

// hash_map::isEmpty()
HashMap.prototype.isEmpty = function () {

};

// hash_map::size()
HashMap.prototype.size = function (value) {

};

// hash_map::containsKey()
HashMap.prototype.containsKey = function (key) {

};

// hash_map::clear()
HashMap.prototype.clear = function () {

};

// hash_map::containsValue()
HashMap.prototype.containsValue = function (value) {

};

// hash_map::get()
HashMap.prototype.get = function (key) {

};

// hash_map::keySet()
HashMap.prototype.keySet = function () {

};

// hash_map::entrySet()
HashMap.prototype.entrySet = function () {

};

// hash_map::remove()
HashMap.prototype.remove = function (key) {

};


// ////////////////////////////////////////////////////////////////
// hash_map::clone()
HashMap.prototype.clone = function () {

};

// hash_map::putAll()
HashMap.prototype.putAll = function (map) {

};


// hash_map::values()
HashMap.prototype.values = function () {

};

module.exports = HashMap;


// HashMap => test by Jisoo
console.log("\n=======test by Jisoo=======");
let HashMap1 = new HashMap();
HashMap1.put("A", 1);
HashMap1.put("B", 2);
HashMap1.put("C", 3);
HashMap1.test();