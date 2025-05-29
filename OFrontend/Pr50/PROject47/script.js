// let answer = prompt('What is your name?')
// if (typeof(answer) === 'string') {
//     var h1 = document.createElement('h1')
//     h1.innerText = answer;
//     document.body.innerText = '';
//     document.body.appendChild(h1);
// }

// var h1 = document.createElement('h1')
// h1.innerText = "Type into the input to make this text change"

// var input = document.createElement('input')
// input.setAttribute('type', 'text')

// document.body.innerText = '';
// document.body.appendChild(h1);
// document.body.appendChild(input);

// input.addEventListener('change', function() {
//     h1.innerText = input.value
// })



//JSON -> JS

const jsonStr = '{"greeting":"hello"}'
let newLine = JSON.parse(jsonStr)
console.log(jsonStr)
console.log(newLine)


//JS -> JSON
 const data ={
    fistname: 'Erkanat',
    last: "Or",
    greeting: 'Hello!'
 }

var newdata= JSON.stringify(data)
console.log(newdata)


function scopeTest() {
    var y = 44;

    console.log(x);
}

var x = 33;
scopeTest();

const letter = "a"
// letter = "b"  TypeError

function count(...food) {
    console.log(food.length)
}

count("Burgers", "Fries", null);




class Animal {

}

class Dog extends Animal {
    constructor() {
        super();
        this.noise = "bark";
    }

    makeNoise() {
      return this.noise;
    }
}

class Wolf extends Dog {
    constructor() {
        super();
        this.noise = "growl";
    }
}

var result = new Wolf();
console.log(result.makeNoise());
