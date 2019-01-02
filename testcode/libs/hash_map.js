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
<<<<<<< HEAD
  else if((123 > hash) && (hash > 107)){
    hash = 4;
  }
  else {
    hash = 5;
  }
  return hash;
};

// hash_map::isEmpty()
HashMap.prototype.isEmpty = function () {
  return this.map === null;
=======
  else if ((123 > hashCode) && (hashCode > 107)) {
    hashCode = 4;
  }
  else {
    hashCode = 5;
  }
  return hashCode;
>>>>>>> 61c7407e5daa6baba4a092f796f6a526d7d3b992
};

// hash_map::put()
HashMap.prototype.put = function (key, value) {
  if (key === undefined || value == undefined){
    console.log("ERROR::put() required parameters(key, value)");
    return -1;
  }

  let newEntry = new Entry(key, value);   // make newEntry
  let pos = this.hash(key);          // find hashCode

  if (this.map[pos] === undefined) {
    this.map[pos] = newEntry;
    this.length++;
  } else {
    let curEntry = this.map[pos];
    while (true) {
      if (curEntry.key === key) {
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

// hash_map::containsKey()
HashMap.prototype.containsKey = function (key) {
  if (key === undefined){
    console.log("ERROR::containsKey() required parameter");
    return -1;
  }

  let posOfMap = this.hash(key);          // find hashCode
  let curEntry = this.map[posOfMap]
  if (this.map[posOfMap] !== undefined) {
    for (let posOfEntry = 0; posOfEntry < this.map[posOfMap].count; posOfEntry++) {
      if (curEntry.key === key) {
        //console.log("key : " + key + "값을 포함하고 있음(true)");
        return true;
      }
      curEntry = curEntry.next;
    }
  }
  //console.log("key : " + key + "값을 포함하지 않음(false)");
  return false;
};

// hash_map::containsValue()
HashMap.prototype.containsValue = function (value) {
  if (value === undefined){
    console.log("ERROR::containsValue() required parameter");
    return -1;
  }


  for (let posOfMap = 0; posOfMap < 6; posOfMap++) {
    if (this.map[posOfMap] !== undefined) {
      let curEntry = this.map[posOfMap]
      for (let posOfEntry = 0; posOfEntry < this.map[posOfMap].count; posOfEntry++) {
        if (curEntry.value === value) {
          // console.log("value : " + value + "값을 포함하고 있음(true)");
          return true;
        }
        curEntry = curEntry.next;
      }
    }
  }
  // console.log("value : " + value + "값을 포함하지 않음(false)");
  return false;
};

// hash_map::get()
HashMap.prototype.get = function (key) {
  if (key === undefined){
    console.log("ERROR::get() required parameter");
    return -1;
  }

  let posOfMap = this.hash(key);          // find hashCode
  let curEntry = this.map[posOfMap]

  if (this.map[posOfMap] !== undefined) {
    for (let posOfEntry = 0; posOfEntry < this.map[posOfMap].count; posOfEntry++) {
      if (curEntry.key === key) {
        //console.log("key : " + key + ", value : " + curEntry.value);
        return curEntry.value;
      }
      curEntry = curEntry.next;
    }
  }
  console.log("ERROR : Key is not exist");
  return undefined;
};

// hash_map::keySet()
HashMap.prototype.keySet = function () {
  let keySet = new Set();
  for (let posOfMap = 0; posOfMap < 6; posOfMap++) {
    if (this.map[posOfMap] !== undefined) {
      let curEntry = this.map[posOfMap]
      for (let posOfEntry = 0; posOfEntry < this.map[posOfMap].count; posOfEntry++) {
        keySet.add(curEntry.key);
        curEntry = curEntry.next;
      }
    }
  }
  // console.log(keySet);
  return keySet;
};

// hash_map::entrySet()
HashMap.prototype.entrySet = function () {
  let entrySet = new Set();
  for (let posOfMap = 0; posOfMap < 6; posOfMap++) {
    if (this.map[posOfMap] !== undefined) {
      let curEntry = this.map[posOfMap]
      for (let posOfEntry = 0; posOfEntry < this.map[posOfMap].count; posOfEntry++) {
        entrySet.add(curEntry.key + "=" + curEntry.value);
        curEntry = curEntry.next;
      }
    }
  }
  //console.log(entrySet);
  return entrySet;
};
// hash_map::remove()
HashMap.prototype.remove = function (key) {
  if (key === undefined){
    console.log("ERROR::remove() required parameter");
    return -1;
  }

  let posOfMap = this.hash(key);          // find hashCode
  let preEntry = undefined;
  let curEntry = this.map[posOfMap];

  if (this.map[posOfMap] !== undefined) {
    for (let posOfEntry = 0; posOfEntry < this.map[posOfMap].count; posOfEntry++) {
      if (curEntry.key === key) {
        switch (posOfEntry) {
          case 0: // remove first key
            curEntry.next.count = this.map[posOfMap].count;
            this.map[posOfMap] = curEntry.next;
            break;
          case this.map[posOfMap].count - 1:  // remove last key
            curEntry.next = undefined;
            break;
          default:
            preEntry.next = curEntry.next;
            curEntry = undefined;
        }
        this.map[posOfMap].count--;
        return true;
      }
      preEntry = curEntry;
      curEntry = curEntry.next;
    }
  }
  console.log("ERROR : Key is not exist");
  return null;
};


// hash_map::clear()
HashMap.prototype.clear = function () {
  this.length = 0;
  this.map = [];
};


// hash_map::isEmpty()
HashMap.prototype.isEmpty = function () {
  //console.log(this.length === 0);
  return this.length === 0;
};

// hash_map::size()
HashMap.prototype.size = function () {
  let size = 0;
  for (let posOfMap = 0; posOfMap < 6; posOfMap++) {
    if (this.map[posOfMap] !== undefined) {
      size += this.map[posOfMap].count;
    }
  }
  console.log("size : " + size);
  return size;
};

///////////////////////////////////////////
HashMap.prototype.test = function () {
  console.log(this.map);
}

<<<<<<< HEAD
// HashMap => test by Jisoo
console.log("\n=======test by Jisoo=======");
let HashMap1 = new HashMap();
HashMap1.put("A", 1);
HashMap1.put("B", 2);
HashMap1.put("C", 3);
HashMap1.test();
//console.log(HashMap1.hash("bc"));
console.log(HashMap1.hash("zbc"));
=======
module.exports = HashMap;
>>>>>>> 61c7407e5daa6baba4a092f796f6a526d7d3b992
