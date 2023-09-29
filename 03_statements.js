confirm('You have just dial the emergency code');
confirm('Please select an emergency line from the following;');

var opt1 = prompt(' 1. Police Service \n 2. Ambulence \n 3. Fire Service');
opt1 = parseInt(opt1);
console.log(opt1);

if (opt1 == 1){
    confirm('Dial *911# to contact the Ghana Police force')
} else if (opt1 == 2){
    confirm('Dial *912# to call an ambulence')
} else if (opt1 == 3){
    confirm('Dial *913# to call the Ghana Fire Service')
} else {confirm('You have dialed the wrong number')}