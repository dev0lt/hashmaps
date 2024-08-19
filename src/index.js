"use strict";
/*
if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bound");
}
*/

import { Node, LinkedList } from "./linked-list.js";

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

  set(key, value) {
    let hashcode = this.hash(key);
    console.log(key, hashcode);

    // If it's the same key = UPDATE
    if (
      this.buckets[hashcode] !== undefined &&
      this.buckets[hashcode].head.value.key === key
    ) {
      console.log("dupa2");
      this.buckets[hashcode].head.value.value === value;
    }

    // If it's COLLISION = add next to the linked list
    if (
      this.buckets[hashcode] !== undefined &&
      this.buckets[hashcode].head.value.key !== key
    ) {
      console.log("dupa");
      this.buckets[hashcode].append({ key, value });
    }

    if (this.buckets[hashcode] === undefined) {
      // this.buckets[hashcode] = { key, value }; -- obsolete
      this.buckets[hashcode] = new LinkedList();
      this.buckets[hashcode].append({ key, value });
    }
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
test.set("banana", "yellow2");
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
