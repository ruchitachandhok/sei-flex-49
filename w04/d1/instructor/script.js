
// SYNTAX

// 1. defining a class (generic)
class Wizard {
    // constructor - a special method
    //             - gets executed
    //               when you create
    //           an instance of Wizard
    constructor(name, house) {
        // 2a. define an attribute based on constructor params
        this.name = name
        // 2a. the name and house can come in as an argument
        this.house = house
        // 2b. these are attributes with some defaults:
        this.hairColor = ""
        this.health = 100
    }
    // we define a method that all wizards can perform
    faint = () => {
        console.log("I am dying.. heelp")
        this.hairColor = "white"
        this.health = 0
    }

    kill = (victim) => {
        this.health += 100
        this.hairColor = "white"
        victim.health = 0
    }
}

class Muggle {
    constructor(name) {
        this.name = name
        this.health = 10
    }
}

// 3. creating a specific instance of Wizard
//    (object)
//    ----we use the "new" keyword
let wizard1 = new Wizard("Ron", "Gryffindorf")
//wizard1.hairColor = "red"
//wizard1.faint()

// 3 (again)
let wizard2 = new Wizard("Voldemort", "Slytherin")
//wizard2.hairColor = "blue"
wizard2.kill(wizard1)

let human1 = new Muggle("Prime Minister of England")

wizard2.kill(human1)

