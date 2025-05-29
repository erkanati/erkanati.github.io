class human{
    constructor(name='E', age=19, gender='M', nation='Asian', hometown='Caucasia'){
        this.name = name
        this.age = age
        this.gender = gender
        this.nation = nation
        this.hometown = hometown
    }

    getHumanInfo(){
        console.log(`Name: ${this.name}, \nAge: ${this.age}, \nGender: ${this.gender}`)
    }
}

class proger extends human{
    constructor(name, age, gender, nation, hometown, xp, energy){
        super(name, age, gender, nation, hometown)
        this.xp = xp
        this.energy = energy
    }

    getProger(){
        super.getHumanInfo()
    }
}

var Er = new proger('Erkanat', 19, 'M', 'Asian', 'Turkey', 70, 90)

Er.getProger()



//object

var Erkanat={
    name: 'Erkanat',
    age: 20,
    gender: 'M'
}

var Erkanat2 = {...Erkanat} //instead Object.create(Erkanat)
console.log(Erkanat2)

for([key, value] of Object.entries(Erkanat2)){
    console.log(key + ': ' + value)
}


//Set:
let justArray = [1,2,2,4,3,3,1,3,7,0,3,8,7,1]
let uniqueArray = new Set(justArray)
console.log(uniqueArray)


//Filter

let prices = [200, 500, 600, 900, 300, 399, 456]

let lower= prices.filter(function(price){if(price<=500){return price}})
console.log(lower)


//Map
let fullPrice = [5000, 2000, 4000, 6500, 3000, 7000]

let tenPercent = fullPrice.map(function(price){return price/10})
console.log(tenPercent)
let totalPrice = fullPrice.map(function(price, discount){return price - tenPercent[discount]})
console.log(totalPrice)

//new Map, no inheritance but indexed:

let boxes = new Map()
boxes.set(1, "Champion")
boxes.set(2, "second")
boxes.set(3, "third")


console.log(boxes)



let cities = ['Rome', 'Paris', 'Milan', 'Berlin', 'London', 'Madrid', 'Barcelona']
let [first, second, third, ...secondV] = cities




let itemsBought1 = [500, 470, 800, 346, 847, 908]

function addtax(taxrate, ...itemsBought){
    return itemsBought.map(item => taxrate * item)
}

function addTax(rate, items){
    return items.map(function(item){return item * rate})
}

let shoppingCard = addTax(1.4, itemsBought1 )
let arrayshop = addtax(1.2, 400, 500, 700, 230, 860, 98, 597)
console.log(shoppingCard)
console.log( arrayshop)




