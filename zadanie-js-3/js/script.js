let zero = document.getElementById("press0");
let one = document.getElementById("press1");
let two = document.getElementById("press2");
let three = document.getElementById("press3");
let four = document.getElementById("press4");
let fife = document.getElementById("press5");
let six = document.getElementById("press6");
let seven = document.getElementById("press7");
let eight = document.getElementById("press8");
let nine = document.getElementById("press9");
let dot = document.getElementById("pressDot");
let del = document.getElementById("pressDel");
let procent = document.getElementById("pressProcent");
let plus = document.getElementById("pressPlus");
let minus = document.getElementById("pressMinus");
let multiply = document.getElementById("pressMultiply");
let divide = document.getElementById("pressDivide");
let equal = document.getElementById("pressEqual");
let inputArea = document.getElementById("inputText");
let mathValue="";
zero.addEventListener("click",function(){
    mathValue += "0"
    inputArea.value = mathValue;
})
one.addEventListener("click",function(){
    mathValue += "1"
    inputArea.value = mathValue;
})
two.addEventListener("click",function(){
    mathValue += "2"
    inputArea.value = mathValue;
})
three.addEventListener("click",function(){
    mathValue += "3"
    inputArea.value = mathValue;
})
four.addEventListener("click",function(){
    mathValue += "4"
    inputArea.value = mathValue;
})
fife.addEventListener("click",function(){
    mathValue += "5"
    inputArea.value = mathValue;
})
six.addEventListener("click",function(){
    mathValue += "6"
    inputArea.value = mathValue;
})
seven.addEventListener("click",function(){
    mathValue += "7"
    inputArea.value = mathValue;
})
eight.addEventListener("click",function(){
    mathValue += "8"
    inputArea.value = mathValue;
})
nine.addEventListener("click",function(){
    mathValue += "9"
    inputArea.value = mathValue;
})
dot.addEventListener("click",function(){
    mathValue += "."
    inputArea.value = mathValue;
})
del.addEventListener("click",function(){
    mathValue = ""
    inputArea.value = mathValue;
})
procent.addEventListener("click",function(){
    mathValue += "%"
    inputArea.value = mathValue;
})
plus.addEventListener("click",function(){
    mathValue += "+"
    inputArea.value = mathValue;
})
minus.addEventListener("click",function(){
    mathValue += "-"
    inputArea.value = mathValue;
})
multiply.addEventListener("click",function(){
    mathValue += "*"
    inputArea.value = mathValue;
})
divide.addEventListener("click",function(){
    mathValue += "/"
    inputArea.value = mathValue;
})
equal.addEventListener("click",function(){
    let calculating = eval(mathValue);
    mathValue = calculating;
    inputArea.value = mathValue;
})