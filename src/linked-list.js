"use strict";

export class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
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

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.data.key === value) {
        // console.log(true);
        return true;
      } else if (!current.next && current.value !== value) {
        // console.log(false);
        return false;
      }
      current = current.next;
    }
  }

  update(key, newValue) {
    let current = this.head;

    while (current) {
      if (current.data.key === key) {
        current.data.value = newValue;
        return;
      }
      current = current.next;
    }
  }

  search(searchedKey) {
    let current = this.head;

    while (current) {
      if (current.data.key === searchedKey) {
        return current.data.value;
      }
      current = current.next;
    }
  }

  remove(searchedKey) {
    let previous = this.head;
    let current = previous.next;

    if (!previous.next && previous.data.key === searchedKey) {
      return -1;
    }

    while (current) {
      if (current.data.key === searchedKey) {
        previous.next = current.next;
        current = null;
        this.size--;
        return;
      }
      previous = previous.next;
      current = current.next;
    }
  }
}
