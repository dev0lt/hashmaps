"use strict";

export class Node {
  constructor(value = null, next = null) {
    this.value = value;
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
}
