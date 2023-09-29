confirm('Hello, Welcome to Investopedia');
confirm("Let's create an account");
var username = prompt('Please create a username: ')
var password = prompt('Please create a password: ')
confirm(username + ', thank you. Your account has been created');

confirm(username + ', to continue, please enter your login information');
var tryuser = prompt('Username: ');
var trypass = prompt('Password: ');
var i = 3;

while (tryuser != username || trypass != password && i > 0){
    confirm('WRONG USERNAME OR PASSWORD');
    confirm('You have ' + i + ' retries left');
    confirm('Try again');
    var tryuser = prompt('Username: ');
    var trypass = prompt('Password: ');
    i--
}

if (i == 0){
    confirm('Failed, no retries left. Your account is locked')
} else if (i > 0){
    confirm('Account login success');
    var money = 10;
    confirm('Your account has been creditted with $' + money);
    var ans = confirm('Do you wish to invest this into stocks ?');
    if (ans == false){confirm('Transaction cancelled')}
    else{
        var stocks = [3, 1, 5]
        var symbol = prompt('Select Stock: \n\t1. NDAQ \n\t2. AAPL\n\t3. Udemy');
        var quantity = prompt('Indicate quantity: ')
        symbol = parseInt(symbol);
        quantity = parseInt(quantity);

        if (symbol == 1){
            var ans = confirm('Do you want to trade NDAQ for $' + quantity*stocks[0] + ' ?')
            var total = money - quantity*stocks[0];
            if (ans){confirm('Trade Confirm. Balance remaining: $' + total)}else{confirm('Transaction cancelled')}
        }else if (symbol == 2){
            var ans = confirm('Do you want to trade AAPL for $' + quantity*stocks[1] + ' ?')
            var total = money - quantity*stocks[1];
            if (ans){confirm('Trade Confirm. Balance remaining: $' + total)}else{confirm('Transaction cancelled')}
        }else if (symbol == 3){
            var ans = confirm('Do you want to trade Udemy for $' + quantity*stocks[2] + ' ?')
            var total = money - quantity*stocks[2];
            if (ans){confirm('Trade Confirm. Balance remaining: $' + total)}else{confirm('Transaction cancelled')}
        }
    }
}