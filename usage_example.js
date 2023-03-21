const LinkedList = require("./index")

const linkedList = new LinkedList()

linkedList.append("a")
linkedList.append("b")
linkedList.append("c")
linkedList.append("b")
linkedList.append("b")
linkedList.append("z")
linkedList.append("y")


console.log(linkedList)
console.log(linkedList.get(0)) // a
console.log(linkedList.get(1)) // b
console.log(linkedList.get(2)) // c

linkedList.delete(0)
console.log(linkedList)
console.log(linkedList.get(0)) // b

linkedList.deleteAll("b")
console.log(linkedList)
console.log(linkedList.get(0)) // c

const clonedLinkedList = linkedList.clone()

console.log(clonedLinkedList)

clonedLinkedList.append("t")
clonedLinkedList.append("t")
clonedLinkedList.append("t")

console.log(clonedLinkedList.size)

console.log(linkedList.size)

console.log("First t :", clonedLinkedList.findFirst("t"))
console.log("Last t :", clonedLinkedList.findLast("t"))

clonedLinkedList.extend(linkedList)

console.log(clonedLinkedList)
console.log(clonedLinkedList.size)

clonedLinkedList.clear()

console.log(clonedLinkedList)
console.log(clonedLinkedList.size)

