//Hash Map implemented by Jisoo
let Entry = function (key, value) {
    this.key = key;
    this.value = value;
    this.next = undefined;
    this.count = 0;
}

const HashMap = function () {
    this.map = new Array();
    this.length = 0;
};

// hash_map::put()
HashMap.prototype.put = function (key, value) {
    let newEntry = new Entry(key, value);
    let hashCode = this.hash(key);

    if (this.containsKey === true) { // 이미 존재하는 key인 경우
        for (let l = 0; l < this.count; l++) {
            this.map[hashCode] = this.map[hashCode].next;
        }
        this.map[hashCode] = newEntry;
        this.count++;
    } else {    // 존재하지 않는 키인 경우
        this.map[hashCode] = newEntry;
        this.length++;
    }
};

HashMap.prototype.test = function () {
    console.log(this.map);
    for (let l = 0; l < this.length; l++) {
        console.log("key : " + this.map[l].key + " , value : " + this.map[l].value);
    }
};


// Hash_map::hash();
HashMap.prototype.hash = function (key) {
    return this.length;
};

// hash_map::isEmpty()
HashMap.prototype.isEmpty = function () {
    console.log(this.length === 0);
    return this.length === 0;
};

// hash_map::size()
HashMap.prototype.size = function (value) {
    console.log(this.length);
    return this.length;
};

// hash_map::containsKey()
HashMap.prototype.containsKey = function (key) {
    for (let l = 0; l < this.length; l++) {
        if (this.map[l].key === key) {
            return true;
        }
        return false;
    }
};


// HashMap => test by Jisoo
console.log("\n=======test by Jisoo=======");
let HashMap_1 = new HashMap();
HashMap_1.put("A", 1);
HashMap_1.put("B", 2);
HashMap_1.put("C", 3);
HashMap_1.put("A", 2);
HashMap_1.test();


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


//////////////////////////////////////////////////////////////////
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

