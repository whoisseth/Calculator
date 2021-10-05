var display = document.querySelector('#display');
var para = document.querySelector('#para');
var btns = document.querySelector('.btns')





copyValue.onclick = function() {
    display.select();
    document.execCommand("copy");
    para.innerHTML = "copied : " + display.value;
}


clearbtn.onclick = function() {
    display.value = '0';
    para.innerHTML = ' ';
    console.log("cButtonIsClicked")
}

backbtn.onclick = function() {
    var res = display.value.charAt(display.value.length - 1);
    var res00 = display.value.charAt(0);

    para.innerHTML = ' ';
    if (res00 == 0 || display.value.lastIndexOf('') == 1 || res == 'y' || res == 'N') {
        console.log('backButtonIsClicked')
        display.value = 0;
    }
    if (display.value == '0') {
        para.innerHTML = ' '
        console.log('2nd if work')
    } else
        display.value = display.value.slice(0, -1);
}

one.onclick = function() {
    var res = display.value.charAt(display.value.length - 1);
    if (res == 0) {
        display.value = display.value.slice(0, -1);
        display.value += '1'
    } else if (res == 'y' || res == 'N') {
        display.value = '1';
    } else {
        display.value += '1'
        console.log('else 1 is clicked')
    }
}

two.onclick = function() {
    var res = display.value.charAt(display.value.length - 1);
    if (res == 0) {
        display.value = display.value.slice(0, -1);
        display.value += '2'

    } else if (res == 'y' || res == 'N') {
        display.value = '2';
    } else {
        display.value += '2'
        console.log('else 2 is clicked')
    }
}

three.onclick = function() {
    var res = display.value.charAt(display.value.length - 1);
    if (res == 0) {
        display.value = display.value.slice(0, -1);
        display.value += '3'

    } else if (res == 'y' || res == 'N') {
        display.value = '3';
    } else {
        display.value += '3'
        console.log('else 3 is clicked')
    }
}

four.onclick = function() {
    var res = display.value.charAt(display.value.length - 1);
    if (res == 0) {
        display.value = display.value.slice(0, -1);
        display.value += '4'

    } else if (res == 'y' || res == 'N') {
        display.value = '4';
    } else {
        display.value += '4'
        console.log('else 4 is clicked')
    }
}

five.onclick = function() {
    var res = display.value.charAt(display.value.length - 1);
    if (res == 0) {
        display.value = display.value.slice(0, -1);
        display.value += '5'

    } else if (res == 'y' || res == 'N') {
        display.value = '5';
    } else {
        display.value += '5'
        console.log('else 5 is clicked')
    }
}

six.onclick = function() {
    var res = display.value.charAt(display.value.length - 1);
    if (res == 0) {
        display.value = display.value.slice(0, -1);
        display.value += '6'

    } else if (res == 'y' || res == 'N') {
        display.value = '6';
    } else {
        display.value += '6'
        console.log('else 6 is clicked')
    }
}

seven.onclick = function() {
    var res = display.value.charAt(display.value.length - 1);
    if (res == 0) {
        display.value = display.value.slice(0, -1);
        display.value += '7'

    } else if (res == 'y' || res == 'N') {
        display.value = '7';
    } else {
        display.value += '7'
        console.log('else 7 is clicked')
    }
}

eight.onclick = function() {
    var res = display.value.charAt(display.value.length - 1);
    if (res == 0) {
        display.value = display.value.slice(0, -1);
        display.value += '8'

    } else if (res == 'y' || res == 'N') {
        display.value = '8';
    } else {
        display.value += '8'
        console.log('else 8 is clicked')
    }
}

nine.onclick = function() {
    var res = display.value.charAt(display.value.length - 1);
    if (res == 0) {
        display.value = display.value.slice(0, -1);
        display.value += '9'
    } else if (res == 'y' || res == 'N') {
        display.value = '9';
    } else {
        display.value += '9'
        console.log('else 9 is clicked')
    }
}

zero.onclick = function() {
    var res = display.value.charAt(display.value.length - 1);

    if (display.value == 0)
        display.value = '0'
    else if (res == 'y' || res == 'N') {
        display.value = '0';
    } else
        display.value += '0'
}


divide.onclick = function() {
    var res = display.value.charAt(display.value.length - 1);
    var res2 = display.value.charAt(display.value.length - 2);

    //
    if (display.value.slice(-2) == '/-' || display.value.slice(-2) == '*-') {
        display.value = display.value.slice(0, -2);
        display.value += '/';
        console.log('/- thisConditionIsClicked')
    }
    //   
    if (res == '%' || res == '*' || res == '+' || res == '-') {
        display.value = display.value.slice(0, -1);
        display.value += '/';
        console.log('replace with /');
    }
    // 
    else if (res == 'y' || res == 'N') {
        display.value = '0';
    }
    //  
    // 
    else if (res != '/') {
        display.value += '/';
        console.log('/isClicked')
    }
    if (res2 == '/' && res == '*') {
        display.value = display.value.slice(0, -2);
        display.value += '/';
        console.log('back functio work with *');
    }
    if (res2 == '*' && res == '/') {
        display.value = display.value.slice(0, -2);
        display.value += '/';
        console.log('back functio work with *');
    }

}


multiply.onclick = function() {
    var res = display.value.charAt(display.value.length - 1);
    var res2 = display.value.charAt(display.value.length - 2);

    //
    if (display.value.slice(-2) == '/-' || display.value.slice(-2) == '*-') {
        display.value = display.value.slice(0, -2);
        display.value += '*';
        console.log('*- thisConditionIsClicked')
    }
    // 
    if (res == '%' || res == '/' || res == '+' || res == '-') {
        display.value = display.value.slice(0, -1);
        display.value += '*';
        console.log('replace with *');
    }
    //
    else if (res == 'y' || res == 'N') {
        display.value = '0';
    }
    //  
    // 
    else if (res != '*' && res != "y" && res != "N") {
        display.value += '*';
        console.log('*isClicked')
    }
    if (res2 == '/' && res == '*') {
        display.value = display.value.slice(0, -2);
        display.value += '*';
        console.log('back functio work with *');
    }
    if (res2 == '*' && res == '/') {
        display.value = display.value.slice(0, -2);
        display.value += '*';
        console.log('back functio work with *');
    }
}


minus.onclick = function() {
    var res = display.value.charAt(display.value.length - 1);
    var resMinus = display.value.charAt(0);

    if (res == '%' || res == '+' || resMinus == '0') {
        display.value = display.value.slice(0, -1);
        display.value += '-';
        console.log('replace with -');
    }
    //
    else if (res == 'y' || res == 'N') {
        display.value = '0';
    }
    //
    else if (res != '-') {
        display.value += '-';
        console.log('+isClicked')
    }
}

plus.onclick = function() {
    var res = display.value.charAt(display.value.length - 1);
    // 
    if (display.value.slice(-2) == '*-' || display.value.slice(-2) == '/-') {
        console.log('*- condition is clicked by +');
        display.value = display.value.slice(0, -2);
        display.value += '+';
    }
    //
    else if (res == 'y' || res == 'N') {
        display.value = '0';

    }



    if (res == '%' || res == '/' || res == '*' || res == '-') {
        display.value = display.value.slice(0, -1);
        display.value += '+';
        console.log('replace with +');
    } else if (res != '+' && res != "y" && res != "N") {
        display.value += '+';
        console.log('+isClicked')
    }
}

dot.onclick = function() {
    var res = display.value.charAt(display.value.length - 1);
    if (res == 'y' || res == 'N') {
        display.value = '0';
    }
    //  
    if (res != '.' && res != "y" && res != "N") {
        display.value += '.';
    } else if (res == '.') {}
}

dblZero.onclick = function() {
    var res = display.value.charAt(display.value.length - 1);

    console.log('dblZero is clicked')
    if (display.value == 0 || res == 'y' || res == 'N') {
        console.log('singleZeroIsWorking')
        display.value = '0'
    } else {
        display.value += '00'
        console.log('dblZeroIsWorking')

    }
}

equal.onclick = function() {
    console.log('equl btn is clicked')
    var res = display.value.charAt(display.value.length - 1);


    if (res == 'y' || res == 'N') {
        display.value = '0';
    } else if (display.value == '0') {
        display.value == '0';

    } else {
        // 
        if (res == '*' || res == '/' || res == '-' || res == '+') {
            num = display.value = display.value.slice(0, -1);
        } else {
            num = display.value;
        }
        // 
        display.value = eval(display.value);

        var num = display.value;
        var n = parseFloat(num).toFixed(2);
        console.log('equl else condition is working')
            // new update
        if (n.slice(-3) == '.00') {
            n.slice(0, -2);
            console.log('.00 operation is working')
        } else {
            display.value = n;

        }

    }

}