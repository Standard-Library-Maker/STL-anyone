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
  let pos = this.hash(key);          // find hashCode

  if (this.map[pos] === undefined) {
    this.map[pos] = newEntry;
    this.length++;
  } else {
    let curEntry = this.map[pos];
    for (let l = 0; l < this.map[pos].count - 1; l++) {
      if (curEntry.key === key) {
        console.log("중복 key : " + curEntry.key);
        curEntry.value = value;
        return 0;
      }
      curEntry = curEntry.next;
    }
    curEntry.next = newEntry;
  }
  this.map[pos].count++;
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
  let pos = this.hash(key);          // find hashCode
  let curEntry = this.map[pos]

  for (let l = 0; l < this.map[pos].count; l++) {
    if (curEntry.key === key) {
      console.log("true");
      return true;
    }
    curEntry = curEntry.next;
  }
  console.log("false");
  return false;
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


HashMap.prototype.test = function () {
  console.log(this.map[0]);
};

// HashMap => test by Jisoo
console.log("\n=======test by Jisoo=======");
let HashMap1 = new HashMap();
HashMap1.put("A", 1);
HashMap1.put("B", 2);
HashMap1.put("C", 3);
HashMap1.put("D", 3);

HashMap1.put("A", 5);
HashMap1.put("C", 5);
HashMap1.put("D", 5);

HashMap1.containsKey("A");
HashMap1.containsKey("B");
HashMap1.containsKey("C");
HashMap1.containsKey("E");
HashMap1.test();