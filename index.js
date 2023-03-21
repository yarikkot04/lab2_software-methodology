class DoublyLinkedListNode {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {

   constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  length() {
    return this.size
  }

  append(elem) {
    if (typeof elem === "string") {
      const node = new DoublyLinkedListNode(elem)

      if (!this.head) {
        this.head = node
        this.tail = node
      } else {
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
      }
      this.size++
    } else {
      throw new Error("Wrong input data type. Enter data with type string")
    }
  }

  insert(elem, index) {
    if (typeof elem === "string") {
      if (index < 0 || index >= this.size) {
        throw new Error("Invalid index")
      }
      const node = new DoublyLinkedListNode(elem)
      if (index === 0) {
        node.next = this.head
        this.head.prev = node
        this.head = node
      } else if (index === this.size) {
        this.append(elem)
      } else {
        let current = this.head
        for (let i = 0; i < index; i++) {
          current = current.next
        }
        node.prev = current.prev
        node.next = current
        current.prev.next = node
        current.prev = node
      }
      this.size++
    } else {
      throw new Error("Wrong input data type. Enter data with type string")
    }
  }

  delete(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Invalid index")
    }
  
    let current = this.head
    let deletedNode
  
    if (index === 0) {

      deletedNode = this.head
      this.head = this.head.next
      if (this.head) {
        this.head.prev = null
      } else {
        this.tail = null 
      }
    } else if (index === this.size - 1) {

      deletedNode = this.tail
      this.tail = this.tail.prev
      this.tail.next = null
    } else {
      for (let i = 0; i < index; i++) {
        current = current.next
      }
      deletedNode = current
      current.prev.next = current.next
      current.next.prev = current.prev
    }
  
    this.size--
  
    return deletedNode.value
  }

  deleteAll(key) {
    let current = this.head
    
    while (current) {
      if (current.value === key) {
        if (current === this.head) {
          this.head = this.head.next
          if (this.head) {
            this.head.prev = null
          } else {
            this.tail = null
          }
        } else if (current === this.tail) {
          this.tail = this.tail.prev
          this.tail.next = null
        } else {
          current.prev.next = current.next
          current.next.prev = current.prev
        }
        this.size --
      }
      current = current.next
    }
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      return new Error("Invalid index")
    }
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    return current.value
  }

  clone() {
    const newList = new DoublyLinkedList()
    let i = 0
    while(i < this.length()) {
      newList.append(this.get(i))
      i++
    }
    return newList
  }

  reverse() {
    let currentNode = this.head
    let temp = null
    while (currentNode) {
      temp = currentNode.prev
      currentNode.prev = currentNode.next
      currentNode.next = temp
      currentNode = currentNode.prev
    }
    temp = this.head
    this.head = this.tail
    this.tail = temp
    return this
  }

  findFirst(elem) {
    let current = this.head

    let index = 0;
    while (current) {
      if (current.value === elem) {
        return index
      }

      current = current.next
      index++
    }

    return -1
  }

  findLast(elem) {
    let current = this.tail
    let index = this.size - 1

    while (current) {
      if (current.value === elem) {
        return index
      }

      current = current.prev;
      index--
    }

    return -1
  }

  clear() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  extend(list) {
    let currentElement = list.head
    let i = 0 
    while(i < list.length()){
      this.append(currentElement.value)
      currentElement = currentElement.next
      i++
    }
  }
}

module.exports = DoublyLinkedList