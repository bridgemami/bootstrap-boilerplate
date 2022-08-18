var promptSign = window.prompt(`What is your name?`);
var text = `Welcome ` + promptSign;
var welcome = window.alert(`Welcome ` + promptSign);
console.log(text);

var user = document.getElementById('heading').innerHTML = text;
const date = document.getElementById('date').innerHTML = new Date();