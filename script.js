let Tempvalue;
let prevOp = "";

function NumberClicked(e){
    var num = e.value;
    var input = document.getElementById("input1");
    input.value = input.value + num;
    Tempvalue = input.value;
}

function Clear(){
    var input = document.getElementById("input1");
    input.value = "";
    prevOp = "";
}

function Backspace(){
    var input = document.getElementById("input1");
    var temp = input.value;
    let lastChar = temp.charAt(temp.length-1)
    if(lastChar =='+' || lastChar == '-' || lastChar == '*' || lastChar =='/') {
        prevOp = "";
    }
    input.value = temp.substring(0,temp.length-1);
}

function Calculate(e){
    var input = document.getElementById("input1");
    var str = input.value;
    var values, calculatedValue;
    if(prevOp === "") {
        prevOp = e.value;
        input.value = input.value + prevOp;
        return;
    }
    switch(prevOp){
        case "+":
            values = str.split("+",2);
            if(values.length > 1)
            calculatedValue = parseFloat(values[0])+parseFloat(values[1]);
            break;
        case "-":
            values = str.split("-",2);
            if(values.length > 1)
            calculatedValue = parseFloat(values[0])-parseFloat(values[1]);
            break;
        case "*":
            values = str.split("*",2);
            if(values.length > 1)
            calculatedValue = parseFloat(values[0])*parseFloat(values[1]);
            break;
        case "/":
            values = str.split("/",2);
            if(values.length > 1){
                if(parseFloat(values[1])===0) {
                    alert("SecondNumberCantbeZero");
                    Clear();
                    return;
                }
                calculatedValue = parseFloat(values[0])/parseFloat(values[1]);
            }
            
            break;
    }
    input.value = calculatedValue + e.value;
    prevOp = e.value;
}

function Equal(){
    var input = document.getElementById("input1");
    var str = input.value;
    if(str === "") return;
    var calculatedValue;
    if(str.includes("+")){
        values = str.split("+",2);
        if(values.length > 1)
            calculatedValue = parseFloat(values[0])+parseFloat(values[1]);
    }else if(str.includes("-")){
        values = str.split("-",2);
        if(values.length > 1)
            calculatedValue = parseFloat(values[0])-parseFloat(values[1]);
    }else if(str.includes("*")){
        values = str.split("*",2);
        if(values.length > 1)
            calculatedValue = parseFloat(values[0])*parseFloat(values[1]);
    }else if(str.includes("/")){
        values = str.split("/",2);
        if(values.length > 1)
            calculatedValue = parseFloat(values[0])/parseFloat(values[1]);
    }

    input.value = calculatedValue === undefined ? input.value : calculatedValue;
    prevOp = "";
}