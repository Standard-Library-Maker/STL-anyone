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


// Hash_map::hash() implemented by Seeung;
HashMap.prototype.hash = function (key) {
  let hashCode = key.charCodeAt(0);
  if ((58 > hashCode) && (hashCode > 47)) {
    hashCode = 0;
  }
  else if ((78 > hashCode) && (hashCode > 64)) {
    hashCode = 1;
  }
  else if ((91 > hashCode) && (hashCode > 77)) {
    hashCode = 2;
  }
  else if ((108 > hashCode) && (hashCode > 96)) {
    hashCode = 3;
  }
  else if ((123 > hashCode) && (hashCode > 107)) {
    hashCode = 4;
  }
  else {
    hashCode = 5;
  }
  return hashCode;
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
    while (true) {
      if (curEntry.key === key) {
        //console.log("중복 key : " + curEntry.key);
        curEntry.value = value;
        return 0;
      }
      if (curEntry.next === undefined) {
        curEntry.next = newEntry;
        break;
      }
      curEntry = curEntry.next;
    }
  }
  this.map[pos].count++;
};

// hash_map::isEmpty()
HashMap.prototype.isEmpty = function () {
  console.log(this.length === 0);
  return this.length === 0;
};

// hash_map::clear()
HashMap.prototype.clear = function () {
  this.length = 0;
  this.map = [];
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

module.exports = HashMap;

///////////////////////////////////////////
HashMap.prototype.test = function () {
  console.log(this.map);
};

// HashMap => test by Jisoo
console.log("\n=======test by Jisoo=======");
let HashMap1 = new HashMap();
HashMap1.isEmpty();
HashMap1.put("0", 1);
HashMap1.put("1", 1);

HashMap1.put("A", 1);
HashMap1.put("B", 2);
HashMap1.put("C", 3);

HashMap1.put("D", 3);

HashMap1.put("A", 5);
HashMap1.put("C", 5);
HashMap1.put("D", 5);

HashMap1.put("N", 1);
HashMap1.put("O", 2);
HashMap1.put("Z", 3);

HashMap1.put("a", 1);
HashMap1.put("b", 2);
HashMap1.put("c", 3);
HashMap1.put("d", 3);
HashMap1.put("z", 1);

HashMap1.containsKey("A");
HashMap1.containsKey("B");
HashMap1.containsKey("C");
HashMap1.containsKey("E");
HashMap1.test();
HashMap1.isEmpty();
HashMap1.clear();
HashMap1.isEmpty();


HashMap1.put("A", 1);
HashMap1.put("B", 2);
HashMap1.put("C", 3);
HashMap1.test();
HashMap1.isEmpty();