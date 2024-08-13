"use strict";
/*
if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bound");
}
*/

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // add to the end of the list
  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      this.size++;
      return;
    }

    let current = this.head;
    while (current) {
      if (!current.next) {
        current.next = new Node(value);
        this.size++;
        return;
      }
      current = current.next;
    }
  }
}

class HashMap {
  constructor(items) {
    this.items = items;
    this.buckets = new Array(items);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.buckets.length;
    }

    return hashCode;
  }

  // needs improvement
  set(key, value) {
    let hashcode = this.hash(key);
    console.log(key, hashcode);

    if (
      this.buckets[hashcode] !== undefined &&
      this.buckets[hashcode].key === key
    ) {
      this.buckets[hashcode].value === value;
    }

    this.buckets[hashcode] = { key, value };
    // If it's the same key = UPDATE
  }

  get(key) {
    let hashcode = this.hash(key);
    console.log(this.buckets[hashcode].value);
  }

  has(key) {
    let hashcode = this.hash(key);
    console.log(this.buckets[hashcode] ? true : false);
  }

  remove(key) {
    let hashcode = this.hash(key);
    if (this.buckets[hashcode]) {
      this.buckets[hashcode] = undefined;
      console.log(true);
    } else console.log(false);
  }

  mapLength() {
    let count = 0;
    this.buckets.forEach((i) => {
      if (i) {
        count++;
      }
    });
    return count;
  }

  clear() {
    this.buckets = new Array(this.items);
  }

  keys() {
    let arr = [];
    this.buckets.forEach((i) => {
      if (i) {
        arr.push(i.key);
      }
    });
    return arr;
  }

  values() {
    let arr = [];
    this.buckets.forEach((i) => {
      if (i) {
        arr.push(i.value);
      }
    });
    return arr;
  }

  entries() {
    let arr = [];
    this.buckets.forEach((i) => {
      if (i) {
        arr.push([i.key, i.value]);
      }
    });
    return arr;
  }
}

const test = new HashMap(16);
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
console.log(test.buckets);
console.log(test.mapLength());

// myHashmap.get("igor");
// myHashmap.has("piotr");
// myHashmap.remove("piotr");
// // myHashmap.remove("igor");
// myHashmap.has("igor");
// console.log(myHashmap.keys());
// console.log(myHashmap.values());
// console.log(myHashmap.entries());
// console.log();
