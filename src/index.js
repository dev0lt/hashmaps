"use strict";

import { Node, LinkedList } from "./linked-list.js";

class HashMap {
  constructor(items) {
    this.items = items;
    this.buckets = new Array(items);
  }

  loadFactor() {
    let load = this.items;
    if (this.length() / load > 0.8) {
      this.buckets.length = load * 2;
    }
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

    if (this.buckets[hashcode] === undefined) {
      this.buckets[hashcode] = new LinkedList();
      this.buckets[hashcode].append({ key, value });
    }

    // If it's the same key = UPDATE
    if (
      this.buckets[hashcode] !== undefined &&
      this.buckets[hashcode].contains(key)
    ) {
      this.buckets[hashcode].update(key, value);
    }

    // If it's COLLISION = add next to the linked list
    if (
      this.buckets[hashcode] !== undefined &&
      !this.buckets[hashcode].contains(key)
    ) {
      this.buckets[hashcode].append({ key, value });
    }

    this.loadFactor();
  }

  get(key) {
    let hashcode = this.hash(key);
    if (this.buckets[hashcode]) {
      console.log(this.buckets[hashcode].search(key));
    } else console.log(null);
  }

  has(key) {
    let hashcode = this.hash(key);

    if (this.buckets[hashcode]) {
      console.log(this.buckets[hashcode].search(key) ? true : false);
    }
  }

  remove(key) {
    let hashcode = this.hash(key);
    if (this.buckets[hashcode]) {
      if (this.buckets[hashcode].remove(key) === -1) {
        this.buckets[hashcode] = undefined;
        return;
      }
      this.buckets[hashcode].remove(key);
      console.log(true);
    } else console.log(false);
  }

  length() {
    let count = 0;
    this.buckets.forEach((i) => {
      if (i) {
        count += i.size;
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
        let node = i.head;
        while (node) {
          arr.push(node.data.key);
          node = node.next;
        }
      }
    });
    return arr;
  }

  values() {
    let arr = [];
    this.buckets.forEach((i) => {
      if (i) {
        let node = i.head;
        while (node) {
          arr.push(node.data.value);
          node = node.next;
        }
      }
    });
    return arr;
  }

  entries() {
    let arr = [];
    this.buckets.forEach((i) => {
      if (i) {
        let node = i.head;
        while (node) {
          arr.push([node.data.key, node.data.value]);
          node = node.next;
        }
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
test.set("hat", "black2");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test.entries());

console.log("--------------");

console.log(test.buckets);
console.log(test.length());

console.log();
