import UserInput from './components/userInput'
import Display from './components/display'
import Calculator from './components/calculator'

var acc = 0, cur = 0, operator = "", combOps = "prueba";
var current = document.getElementById('curr');
var accumulated = document.getElementById('accu');

new UserInput()
new Display(cur)
new Calculator()
