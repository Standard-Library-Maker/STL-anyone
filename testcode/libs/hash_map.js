let Entry = function (key, value) {
  this.key = key;
  this.value = value;
  this.next = undefined;
  this.count = 0;
};

/**
 * @Class HashMap
 * @classdesc key(키)를 해싱하여 value(값)에 매핑할 수 있는 구조로 이루어진 자료구조이다.
 * @example 
 * var hm = new HashMap ();
 * @author ljsoo0925@gmail.com
 */
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

/**
 * @method HashMap.put
 * @description This method is used to insert the specified key with the specified value in this hash map.
 * @param {undefined} key - The key with which the specified value is to be associated.
 * @param {undefined} value - The value to be associated with the specified key.
 * @throws This method returns 'false' if the either one parameter is missing.
 * @example 
 * var hm = new HashMap ();
 * hm.put("A", 1);   // (key : A) - (Value : 1)
 * hm.put("가", 1);  // (key : 가) - (Value : 1)
 * hm.put("A", 2);   // (key : A) - (Value : 2) => change value associated with key A
 */
HashMap.prototype.put = function (key, value) {
  if (key === undefined || value == undefined){
    console.log("ERROR::put() required parameters(key, value)");
    return false;
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
        return;
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

/**
 * @method HashMap.containsKey
 * @description This method is used to check if this hash map contains the specified key.
 * @param {undefined} key - The key with which the specified value is to be associated.
 * @returns {Boolean} This method returns ‘true’ if this hash map contains the specified key, or ‘false’ if this hash map doesn’t contain the specified key.
 * @throws This method returns 'false' if the parameter is missing.
 * @example  
 * var hm = new HashMap ();
 * var ret1 = hm.containsKey("A"); // ret1 = false
 * hm.put("A", 1);  
 * var ret2 = hm.containsKey("A"); // ret1 = true
 */
HashMap.prototype.containsKey = function (key) {
  if (key === undefined){
    console.log("ERROR::containsKey() required parameter");
    return false;
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

/**
 * @method HashMap.containsValue
 * @description This method is used to check if this hash map contains the specified value.
 * @param {undefined} value - The value with which the specified key is to be associated.
 * @returns {Boolean} This method returns ‘true’ if this hash map contains the specified value, or ‘false’ if this hash map doesn’t contain the specified value.
 * @throws This method returns 'false' if the parameter is missing.
 * @example  
 * var hm = new HashMap ();
 * var ret1 = hm.containsValue(1); // ret1 = false
 * hm.put("A", 1);  
 * var ret2 = hm.containsValue(1); // ret1 = true
 */
HashMap.prototype.containsValue = function (value) {
  if (value === undefined){
    console.log("ERROR::containsValue() required parameter");
    return false;
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

/**
 * @method HashMap.get
 * @description This method is used to get the value which mapped with the specified key from this hash map.
 * @param {undefined} key - the key with which the specified value is to be associated. 
 * @returns {undefined} This method returns the value which be associated with the specified key.
 * @throws This method return false if the parameter is missing, or null if this hash map doesn’t contain this key.
 * @example  
 * var hm = new HashMap ();
 * hm.put("A", 1) ;
 * var ret = hm.get("A"); // ret1 = 1
 */
HashMap.prototype.get = function (key) {
  if (key === undefined){
    console.log("ERROR::get() required parameter");
    return false;
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
  return null;
};

/**
 * @method HashMap.keySet
 * @description This method is used to get a Set of the keys in this hash map.
 * @returns {Set} This method returns a set of the key in this hash map.
 * @example  
 * var hm = new HashMap ();
 * hm.put("A", 1);  
 * hm.put("B", 2); 
 * hm.put("가", 2);
 * Set set = hm.keySet(); // set = {"A", "B", "가"}
 */
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
  //console.log(keySet);
  return keySet;
};

/**
 * @method HashMap.entrySet
 * @description This method is used to get a Set of the mappings in this hash map.
 * @returns {Set}  This method returns a set of the mappings in this hash map.
 * @example  
 * var hm = new HashMap ();
 * hm.put("A", 1);  
 * hm.put("B", 2); 
 * hm.put("가", 2);
 * Set set = hm.keySet(); // set = {"A-1", "B-2", "가-2"}
 */
HashMap.prototype.entrySet = function () {
  let entrySet = new Set();
  for (let posOfMap = 0; posOfMap < 6; posOfMap++) {
    if (this.map[posOfMap] !== undefined) {
      let curEntry = this.map[posOfMap]
      for (let posOfEntry = 0; posOfEntry < this.map[posOfMap].count; posOfEntry++) {
        entrySet.add(curEntry.key + "-" + curEntry.value);
        curEntry = curEntry.next;
      }
    }
  }
  //console.log(entrySet);
  return entrySet;
};

/**
 * @method HashMap.remove
 * @description This method is used to remove the mapping with the specified key from this hash map.
 * @param {undefined} key - the key with which the specified value is to be associated. 
 * @throws This method returns 'false' if the parameter is missing, or null if this hash map doesn’t contain this key.
 * @example  
 * var hm = new HashMap ();
 * hm.put("A", 1);  
 * hm.put("B", 2); 
 * hm.remove("A"); // (key : A) - (Value : 1) will be removed
 */
HashMap.prototype.remove = function (key) {
  if (key === undefined){
    console.log("ERROR::remove() required parameter");
    return false;
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

/**
 * @method HashMap.clear
 * @description This method is used to remove all of th mappings from this hash map.
 * @example  
 * var hm = new HashMap ();
 * hm.put("A", 1);  
 * hm.put("B", 2); 
 * hm.clear(); 
 */
HashMap.prototype.clear = function () {
  this.length = 0;
  this.map = [];
};

/**
 * @method HashMap.isEmpty
 * @description This method is used to check if this hash map is empty.
 * @returns {Boolean} The method returns ‘true’ if this deque is empty, or ‘false’ if this deque is not empty.
 * @example  
 * var hm = new HashMap ();
 * var ret1 = hm.isEmpty(); // ret1 = true;
 * hm.put("A", 1);  
 * hm.put("B", 2); 
 * var ret2 = hm.isEmpty(); // ret2 = false
 */
HashMap.prototype.isEmpty = function () {
  //console.log(this.length === 0);
  return this.length === 0;
};

/**
 * @method HashMap.size
 * @description This method is used to get the number of key-value mappings in this hash map.
 * @returns {Number} The method returns the number of values in this deque.
 * @example  
 * var hm = new HashMap ();
 * hm.put("A", 1);  
 * hm.put("B", 2); 
 * var size = hm.size(); // size = 2
 */
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

module.exports = HashMap;