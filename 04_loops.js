x = 9;
console.log('Numbers less than', x );

for (i=0; i<x; i++){
    console.log(i);
}


var fname = prompt('First Name:')
var lname = prompt('Last Name:')
var pass = prompt(' Hello '+ fname + ' ' + lname + ', Welcome to this app \n Please create a new password')
confirm('Success, Password Created')
var pa = prompt(fname + ' ' + lname +', to login, please enter your password')
var i = 3;
while (pa != pass && i > 0){
    confirm("WRONG PASSWORD");
    confirm('You have '+ i +' more retries');
    var pa = prompt('Please retry again');
    i--
}
if (i==0){confirm('You have exhusted all your retries. Account is locked')}
else if (i>0){confirm('Success, you are logged in')}