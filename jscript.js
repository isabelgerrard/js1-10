function sleepIn(weekday,vacation) {
    return !!(weekday == false || vacation == true);
}



function monkeyTrouble(a_smile, b_smile) {
    return a_smile == b_smile;
}

function stringTimes(string, n){
    var print = "";
    for (var i = 0; i < n; i++){
        print += string;
    }

    return print;
}



function frontTimes(string, n){
    var print = "";
    var frontString = string.substring(0,3);
    for (var i = 0; i < n; i++){
        print += frontString;
    }

    return print;
}



function stringBits(str){
    var print = "";
    for (var i = 0; i < str.length; i++){
        if( i%2 == 0 ){
            print += str[i];
        }
    }

    return print;
}



function caughtSpeeding(speed, birthday){
    if (birthday == true){
        speed = speed - 5;
    }

    if(speed < 60){
        var numTickets = 0;
    }

    if(speed >= 61 && speed <= 80){
        numTickets = 1;
    }

    if(speed >= 81){
        numTickets=2
    }

    return numTickets;
}



function fizzBuzz(n){
    var print = "";
    if(n%3 == 0){
        print = "Fizz";
    }
    if(n % 5 == 0){
        print = "Buzz";
    }
    if(n % 15 == 0){
        print = "FizzBuzz";
    }
    if(n %3!==0 && n %5!==0 && n %15!==15){
        print = n;
    }

    return print += "!";
}



function teaParty(tea,candy){
    var partyGrade = "";
    if(tea >= 5 && candy >= 5){
        partyGrade = 1;
    }

    if(tea >= candy * 2 || candy >= tea * 2){
        partyGrade =2;
    }

    while(tea <= 5 || candy <= 5) {
        partyGrade = 0;
        break;
    }

    return partyGrade;
}



function blackJack(x,y){
    var card = "";
    if(x > y && x < 21 || y > 21){
        card = x;
    }
    if( y > x && y < 21 || x > 21){
        card = y;
    }

    if( x > 21 && y > 21){
        card = 0;
    }

    return card;
}



function loneSum(x,y,z){
    var print = "";
    if(x == y){
        x = 0;
        y = 0;
    }
    if(x == z){
        x = 0;
        z = 0;
    }
    if(z == y){
        z = 0;
        y = 0;
    }

    print = x + y + z;

    return print;
}



function tester(){

    document.getElementById("sleepOutput1").innerHTML = sleepIn(true,false);
    document.getElementById("monkeyOutput2").innerHTML = monkeyTrouble(true,true);
    document.getElementById("stringOutput3").innerHTML = stringTimes("Izzy is so cool. ", 10);
    document.getElementById("frontOutput4").innerHTML = frontTimes("Isabel", 5);
    document.getElementById("bitsOutput5").innerHTML = stringBits("Chicken");
    document.getElementById("speedingOutput6").innerHTML = caughtSpeeding(83,true);
    document.getElementById("fizzOutput7").innerHTML = fizzBuzz(300);
    document.getElementById("partyOutput8").innerHTML = teaParty(4,10);
    document.getElementById("bjOutput9").innerHTML = blackJack(18,20);
    document.getElementById("loneOutput10").innerHTML = loneSum(1,3,4);

}


