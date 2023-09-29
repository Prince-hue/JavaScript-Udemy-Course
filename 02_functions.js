console.log("Let's create a sentence")
var q1 = prompt('Please enter a number: ')
var q2 = prompt('Please enter another number: ')
var q3 = prompt('Please enter your name: ')
var q4 = prompt('Please enter a color: ')

function botn (name, color, num1, num2){
    console.log(name + ', you like the color ' + color)
    console.log('The summation of the two numbers you entered is', num1 + num2)
}

botn(q3, q4, q1, q2)