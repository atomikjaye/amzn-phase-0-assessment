// 1. Write your functions here
// learned to change color in console from: https://simplernerd.com/js-console-colors/ & https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit
// make a constructor function to make new inventory
function KatzMenuCreator(foodItem, price, inventory) {
  this.sandwich = foodItem,
    this.price = price,
    this.inventory = inventory
  this.reduceInventory = function (amount) {
    console.log("\x1b[30m\x1b[3m%s\x1b[0m", `INVENTORY CHECK: We now have ${(this.inventory) < 0 ? 0 : this.inventory = this.inventory - amount} ${this.sandwich}${(this.inventory === 1 ? '' : 'es')} in inventory!`)
    console.log('')
  }
  this.increaseInventory = function (amount) {
    console.log("\x1b[30m\x1b[3m%s\x1b[0m", `INVENTORY CHECK: We now have ${this.inventory = this.inventory + amount} ${this.sandwich}${(this.inventory === 1 ? '' : 'es')} in inventory!`)
    console.log('')
  }
}

// Populate Menu
const no1 = new KatzMenuCreator("Katz\'s Pastrami Sandwich", 24.95, 5)
const no2 = new KatzMenuCreator("Katz\'s Corned Beef Sandwich", 23.95, 5)
const no3 = new KatzMenuCreator("Katz's Reuben Sandwich", 25.95, 5)


function line(lineArr) {
  if (lineArr.length === 0) {
    return console.log("\x1b[93m\x1b[3m%s\x1b[0m", "The line is currently empty.")
  } else {
    let people = lineArr.map((person, index) => `${index + 1}. ${person}`).join(' ')
    let phrase = `The line is currently: ${people}\n`
    return console.log("\x1b[93m\x1b[3m%s\x1b[0m", phrase)
  }
}

// Check if person is already in array by using the lastIndexOf
function takeANumber(arr, person) {
  arr.push(person)
  // console.log(arr)
  return console.log(`👋 Welcome, ${person}. You are number ${arr.lastIndexOf(person) + 1} in line`)
}
// making a variable to hold person's name
let currentPerson = ''

// now serving call
function nowServing(arr) {
  console.log("\x1b[95m\x1b[1m%s\x1b[0m", `Currently serving ${currentPerson = arr.shift()}`)
}

// when a person decides to leave line
function leaveLine(arr) {
  console.log("\x1b[91m\x1b[3m%s\x1b[0m", `${arr.shift()}, has decided to leave`)
}

// When person makes a new order
function newOrder(sandwichChoice, amount) {
  // show customer the menu
  console.log(`\n*****************************************`)
  console.log("\x1b[1m%s\x1b[0m", `What would you like to order?`)
  console.log(`1. ${no1.sandwich}\n2. ${no2.sandwich}\n3. ${no3.sandwich}`)
  console.log(`*****************************************`)
  console.log("\x1b[95m\x1b[1m%s\x1b[0m", `You have ordered ${amount} No.${sandwichChoice}${(amount === 1 ? '' : 's')}\n`)

  // options OLD without dynamic code
  if (sandwichChoice === 1) {
    if (amount > no1.inventory) {
      console.log("\x1b[101m%s\x1b[0m", `❌ Sorry we can't fulfill your ${no1.sandwich} order!`)
    } else if (no1.inventory >= amount) {
      console.log("\x1b[96m%s\x1b[0m", `Here is your order ${currentPerson}, come back again!\n`)
      no1.reduceInventory(amount)
    }
  }
  else if (sandwichChoice === 2) {
    if (amount > no2.inventory) {
      console.log("\x1b[101m%s\x1b[0m", `❌ Sorry we can't fulfill your ${no2.sandwich} order!`)
    } else if (no2.inventory >= amount) {
      console.log("\x1b[96m%s\x1b[0m", `Here is your order ${currentPerson}, come back again!\n`)
      no2.reduceInventory(amount)
    }
  }
  else if (sandwichChoice === 3) {
    if (amount > no3.inventory) {
      console.log("\x1b[101m%s\x1b[0m", `❌ Sorry we can't fulfill your ${no3.sandwich} order!`)
    } else if (no3.inventory >= amount) {
      console.log("\x1b[96m%s\x1b[0m", `Here is your order ${currentPerson}, come back again!\n`)
      no3.reduceInventory(amount)
    }
  } else {
    console.log("\x1b[101m%s\x1b[0m", `❌ Sorry we do not have ${no1.sandwich} anymore!`)
  }
  // switch (sandwichChoice, amount) {
  //   case 1:
  //     if (amount > no1.inventory) {
  //       console.log(`     Sorry we can't fulfill your entire ${no1.sandwich} order!`)
  //     } else if (no1.inventory > amount) {
  //       no1.reduceInventory(amount)
  //     } else {
  //       console.log('WE AINT GOT THAT')
  //     }
  //     break
  //   case 2:
  //     if (no2.inventory === 0) {
  //       console.log(`     Sorry we do not have ${no2.sandwich} anymore!`)
  //     } else {
  //       no2.reduceInventory(amount)
  //     }
  //     break
  //   case 3:
  //     if (no3.inventory === 0) {
  //       console.log(`     Sorry we do not have ${no3.sandwich} anymore!`)
  //     } else {
  //       no3.reduceInventory(amount)
  //     }
  //     break
  //   default:
  //     console.log("     Sorry we don't have that/that many in stock!")
  //     console.log(amount, no1.inventory)
  // }
}

// 2. Example Usage

// const katzDeli = ["ada", 'grace', 'kent']
const katzDeli = []
// console.log()

takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Ali") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.
takeANumber(katzDeli, "Marquis") //=> Welcome, Kent. You are number 3 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

console.log('')
console.log('')

line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Ali 4. Kent 5. Marquis 6. Kent"

nowServing(katzDeli) //=> "Currently serving Ada."
newOrder(1, 6) // not enough in inventory
newOrder(1, 3) // will go through
console.log('')
console.log('')



line(katzDeli) //=> "The line is currently: 1. Grace 2. Ali 3. Kent 4. Marquis 5. Kent"
no2.increaseInventory(4)


takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.
console.log('')

line(katzDeli) //=> "The line is currently: 1. Grace 2. Ali 3. Kent 4. Marquis 5. Kent 6. Matz"
no3.increaseInventory(2)


nowServing(katzDeli) //=> "Currently serving Grace."
newOrder(3, 2) // Grace makes Order

console.log('')
console.log('')
line(katzDeli) //=> "The line is currently: 1. Ali 2. Kent 3. Marquis 4. Kent 5. Matz"


leaveLine(katzDeli)
leaveLine(katzDeli)

console.log('')

line(katzDeli) //=> "The line is currently: 1. Marquis 2. Kent 3. Matz"

nowServing(katzDeli) //=> "Currently serving Marquis."
newOrder(2, 4) // Marquis makes Order

console.log('')
console.log('')
line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"

nowServing(katzDeli) //=> "Currently serving Kent."
newOrder(3, 1) // Kent makes Order

console.log('')
console.log('')
line(katzDeli) //=> "The line is currently: 1. Matz"

nowServing(katzDeli) //=> "Currently serving Matz."
newOrder(3, 1) // Matz makes Order
line(katzDeli) //=> "The line is currently empty"

takeANumber(katzDeli, "Shantique") //=> Welcome, Shantique, Matz. You are number 1 in line.
takeANumber(katzDeli, "Jacques") //=> Welcome, Jacques. You are number 1 in line.
console.log("")
console.log("")

nowServing(katzDeli) //=> "Currently serving Shantique."
newOrder(3, 2) // Shantique makes Order

nowServing(katzDeli) //=> "Currently serving Jacques."
newOrder(3, 2) // Jacques makes Order
newOrder(3, 1) // Jacques makes Order
line(katzDeli) //=> "The line is currently empty"

takeANumber(katzDeli, "Mohammed") //=> Welcome, Mohammed. You are number 1 in line.
nowServing(katzDeli) //=> "Currently serving Mohammed."
newOrder(2, 5) // Mohammed makes Order

console.log("")
console.log("")
