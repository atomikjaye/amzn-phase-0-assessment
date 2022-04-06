// 1. Write your functions here
function line(lineArr) {
  if (lineArr.length === 0) {
    return console.log("The line is currently empty.")
  } else {
    let people = lineArr.map((person, index) => `${index + 1}. ${person}`).join(' ')
    let phrase = `The line is currently: ${people}\n`
    return console.log(phrase)
  }
}

function takeANumber(arr, person) {
  arr.push(person)
  // console.log(arr)
  return console.log(`Welcome, ${person}. You are number ${arr.indexOf(person) + 1} in line`)
}

// now serving call
function nowServing(arr) {
  console.log(`Currently serving ${currentPerson = arr.shift()}`)
}

// 2. Example Usage

// const katzDeli = ["ada", 'grace', 'kent']
const katzDeli = []


takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

nowServing(katzDeli) //=> "Currently serving Ada."

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(katzDeli) //=> "Currently serving Grace."

line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"