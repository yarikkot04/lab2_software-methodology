const LinkedList = require("./index")

let linkedList

describe("Class method: length()", () => {

  beforeEach(() => {
    linkedList = new LinkedList()
  })

  test("should return 0 for an empty list", () => {
    expect(linkedList.length()).toBe(0)
  })

  test("if there are several elements in the list, then their number should be returned", () => {
    linkedList.append("x")
    linkedList.append("y")
    linkedList.append("z")
    linkedList.append("xyz")
    linkedList.append("abc")
    expect(linkedList.length()).toBe(5)
  })
})

describe("Class method: append()", () => {

  beforeEach(() => {
    linkedList = new LinkedList()
  })

  test("should add items to the list", () => {
    linkedList.append("a")
    linkedList.append("b")
    linkedList.append("c")
    expect(linkedList.get(0)).toBe("a")
    expect(linkedList.get(1)).toBe("b")
    expect(linkedList.get(2)).toBe("c")

  })

  test("should cause an error when an incorrect data type is passed", () => {
    let attemp_1 = () => linkedList.append(5)
    let attemp_2 = () => linkedList.append(null)
    let attemp_3 = () => linkedList.append(undefined)
    let attemp_4 = () => linkedList.append([])
    let attemp_5 = () => linkedList.append({})
    let attemp_6 = () => linkedList.append(true)

    expect(linkedList.length()).toBe(0)

    expect(attemp_1).toThrow("Wrong input data type. Enter data with type string")

    expect(attemp_2).toThrow("Wrong input data type. Enter data with type string")

    expect(attemp_3).toThrow("Wrong input data type. Enter data with type string")

    expect(attemp_4).toThrow("Wrong input data type. Enter data with type string")

    expect(attemp_5).toThrow("Wrong input data type. Enter data with type string")

    expect(attemp_6).toThrow("Wrong input data type. Enter data with type string")
  })
})

describe("Class method: insert()", () => {

  beforeEach(() => {
    linkedList = new LinkedList()
    linkedList.append("a")
    linkedList.append("b")
    linkedList.append("c")
  })

  test("should insert the given element at the given index", () => {
    linkedList.insert("z", 1)

    expect(linkedList.get(1)).toBe("z")

    expect(linkedList.get(0)).toBe("a")
    expect(linkedList.get(2)).toBe("b")
    expect(linkedList.get(3)).toBe("c")
  })

  test("an error should be returned when input incorrect index", () => {
    let attemp_1 = () => linkedList.insert("z", -1)
    let attemp_2 = () => linkedList.insert("y", linkedList.length())
    let attemp_3 = () => linkedList.insert("y", linkedList.length() + 1)

    expect(linkedList.length()).toBe(3)

    expect(attemp_1).toThrow("Invalid index")

    expect(attemp_2).toThrow("Invalid index")
    expect(attemp_3).toThrow("Invalid index")
  })

  test("an error should be thrown when an incorrect data type is entered", () => {
    let attemp_1 = () => linkedList.insert(5, 1)
    let attemp_2 = () => linkedList.append(null, 1)
    let attemp_3 = () => linkedList.append(undefined, 1)
    let attemp_4 = () => linkedList.append([], 1)
    let attemp_5 = () => linkedList.append({}, 1)
    let attemp_6 = () => linkedList.append(true, 1)

    expect(linkedList.length()).toBe(3)

    expect(attemp_1).toThrow("Wrong input data type. Enter data with type string")

    expect(attemp_2).toThrow("Wrong input data type. Enter data with type string")

    expect(attemp_3).toThrow("Wrong input data type. Enter data with type string")

    expect(attemp_4).toThrow("Wrong input data type. Enter data with type string")

    expect(attemp_5).toThrow("Wrong input data type. Enter data with type string")

    expect(attemp_6).toThrow("Wrong input data type. Enter data with type string")
  })

})

describe("Class method: delete()", () => {

  beforeEach(() => {
    linkedList = new LinkedList()
    linkedList.append("a")
    linkedList.append("b")
    linkedList.append("c")
  })

  test("should delete the element at the given index, and return deleted value", () => {
    const deletedValue = linkedList.delete(1)

    expect(deletedValue).toBe("b")

    expect(linkedList.length()).toBe(2)

    expect(linkedList.get(0)).toBe("a")
    expect(linkedList.get(1)).toBe("c")
  })
  test("should generate an error if an incorrect index is passed", () => {
    const attemp_1 = () => linkedList.delete(10)
    const attemp_2 = () => linkedList.delete(linkedList.length())
    const attemp_3 = () => linkedList.delete(-1)

    expect(attemp_1).toThrow("Invalid index")
    expect(attemp_2).toThrow("Invalid index")

    expect(attemp_3).toThrow("Invalid index")
  })
})

describe("Class method: deleteAll()", () => {

  beforeEach(() => {
    linkedList = new LinkedList()
    linkedList.append("a")
    linkedList.append("b")
    linkedList.append("c")
    linkedList.append("b")
    linkedList.append("b")
  })

  test("should remove from the list all elements whose values are equal to the searched one", () => {
    linkedList.deleteAll("b")

    expect(linkedList.length()).toBe(2)

    expect(linkedList.get(0)).toBe("a")
    expect(linkedList.get(1)).toBe("c")
  })

  test("if the specified element is not in the list, then there should be no changes", () => {
    linkedList.deleteAll("z")

    expect(linkedList.length()).toBe(5)

    expect(linkedList.get(0)).toBe("a")
    expect(linkedList.get(1)).toBe("b")
    expect(linkedList.get(2)).toBe("c")
    expect(linkedList.get(3)).toBe("b")
    expect(linkedList.get(4)).toBe("b")
  })
})

describe("Class method: get()", () => {

  beforeEach(() => {
    linkedList = new LinkedList()
    linkedList.append("a")
    linkedList.append("b")
    linkedList.append("c")
  })

  test("should transmit the element at the specified position", () => {
    expect(linkedList.get(0)).toBe("a")
    expect(linkedList.get(1)).toBe("b")
    expect(linkedList.get(2)).toBe("c")
  })

  test("throw an error if an incorrect index is passed", () => {
    const attemp_1 = () => linkedList.get(-1)
    const attemp_2 = () => linkedList.get(linkedList.length())

    expect(attemp_1()).toBeInstanceOf(Error)
    expect(attemp_2()).toBeInstanceOf(Error)
  })
})

describe("Class method: clone()", () => {

  beforeEach(() => {
    linkedList = new LinkedList()
    linkedList.append("a")
    linkedList.append("b")
    linkedList.append("c")
  })

  test("should create a copy of the list and return it", () => {
    const clonedLinkedList = linkedList.clone()

    expect(clonedLinkedList.get(0)).toBe("a")
    expect(clonedLinkedList.get(1)).toBe("b")
    expect(clonedLinkedList.get(2)).toBe("c")
  })

  test("the lists must be independent", () => {
    const clonedLinkedList = linkedList.clone()

    clonedLinkedList.append("d")

    expect(linkedList.length()).toBe(3)
    expect(clonedLinkedList.length()).toBe(4)

    expect(clonedLinkedList.get(3)).toBe("d")
    expect(linkedList.get(3)).toBeInstanceOf(Error)
  })
})

describe("Class method: reverse()", () => {

  test("should reverse the order of items in the current list", () => {
    linkedList = new LinkedList()
    linkedList.append("a")
    linkedList.append("b")
    linkedList.append("c")
    linkedList.append("d")

    linkedList.reverse()

    expect(linkedList.get(0)).toBe("d")
    expect(linkedList.get(1)).toBe("c")
    expect(linkedList.get(2)).toBe("b")
    expect(linkedList.get(3)).toBe("a")
  })
})

describe("Class method: findFirst()", () => {

  beforeEach(() => {
    linkedList = new LinkedList()
    linkedList.append("a")
    linkedList.append("b")
    linkedList.append("c")
    linkedList.append("b")
    linkedList.append("b")
  })

  test("must find the first element in the list equal to the one searched for and return its position", () => {
    const result = linkedList.findFirst("b")

    expect(result).toBe(1)
  })
  test("if the sought element is missing, -1 should be returned", () => {
    const result = linkedList.findFirst("z")

    expect(result).toBe(-1)
  })
})

describe("Class method: findLast()", () => {

  beforeEach(() => {
    linkedList = new LinkedList()
    linkedList.append("a")
    linkedList.append("b")
    linkedList.append("c")
    linkedList.append("b")
    linkedList.append("b")
  })

  test("must find the last element in the list equal to the one searched for and return its position", () => {
    const result = linkedList.findLast("b")

    expect(result).toBe(4)
  })

  test("if the sought element is missing, -1 should be returned", () => {
    const result = linkedList.findLast("z")

    expect(result).toBe(-1)
  })
})

describe("Class method: clear()", () => {
  test("should remove all items from the list", () => {
    linkedList = new LinkedList()
    linkedList.append("a")
    linkedList.append("b")
    linkedList.append("c")

    expect(linkedList.length()).toBe(3)
    linkedList.clear()
    expect(linkedList.length()).toBe(0)

    const attemp = () => linkedList.get(0)
    expect(attemp()).toBeInstanceOf(Error)
  })
})

describe("Class method: extend()", () => {

  beforeEach(() => {
    linkedList = new LinkedList()
    linkedList.append("a")
    linkedList.append("b")
    linkedList.append("c")
  })

  test("should take another list and add its elements to the current list", () => {
    const linkedList_2 = new LinkedList()
    linkedList_2.append("x")
    linkedList_2.append("y")
    linkedList_2.append("z")

    linkedList_2.extend(linkedList)

    expect(linkedList_2.length()).toBe(6)

    expect(linkedList_2.get(0)).toBe("x")
    expect(linkedList_2.get(1)).toBe("y")
    expect(linkedList_2.get(2)).toBe("z")
    expect(linkedList_2.get(3)).toBe("a")
    expect(linkedList_2.get(4)).toBe("b")
    expect(linkedList_2.get(5)).toBe("c")
  })

  test("the lists must be independent", () => {
    let linkedList_2 = new LinkedList()

    linkedList_2.extend(linkedList)

    linkedList_2.delete(0)

    expect(linkedList.length()).toBe(3)
    expect(linkedList_2.length()).toBe(2)
    linkedList_2.append('z')
    expect(linkedList.get(2)).toBe("c")
    expect(linkedList_2.get(2)).toBe("z")
  })
})
