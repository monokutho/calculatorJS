var acc = 0, cur = 0, operator = "", combOps = "";
var current = document.getElementById('curr');
var accumulated = document.getElementById('accu');

function showCurDis (){
  current.innerHTML = cur;//actualiza el display cur, cuando se clica un numero
  if(acc === ""){
      accumulated.innerHTML = acc;
  }
}

function showAccDis () {
  showCurDis ()
  accumulated.innerHTML = combOps;
}

function equal(){
  cur = eval(combOps+cur);
  acc = 0;
  showCurDis ();
  accumulated.innerHTML = "";
  combOps = "";
}

function clickNum (n){
  if(cur === 0){
    cur = n.toString();
    showCurDis();
  } else {
    cur += n.toString();
    showCurDis();
  }
}

function point(){
  if(cur.indexOf(".") == -1){
    cur = cur+".";
    showCurDis();
  }
}

function reset(){
  cur = 0, acc = "", operator = "", combOps = "";
  showCurDis();
}

function erase(){
cur = cur.slice(0, cur.length - 1);
  showCurDis();
}

//OPERATIONS

function divide(){
  if(combOps === "") {//si es la primera operacion
      acc = cur;
      combOps = acc + "/";
      cur= "";
      showAccDis();
  } else {
      acc = eval(combOps + cur)
      combOps = acc + "/";
      showAccDis();;
      cur= "";
      showCurDis();
  }
}

function multiply(){
  if(combOps === "") {//si es la primera operacion
      acc = cur;
      combOps = acc + "*";
      cur= "";
      showAccDis();
  } else {
      acc = eval(combOps + cur)
      combOps = acc + "*";
      showAccDis();;
      cur= "";
      showCurDis();
  }
}

function substract(){
  if(combOps === "") {//si es la primera operacion
      acc = cur;
      combOps = acc + "-";
      cur= "";
      showAccDis();
  } else {
      acc = eval(combOps + cur)
      combOps = acc + "-";
      showAccDis();;
      cur= "";
      showCurDis();
  }
}

function add(){
  if(combOps === "") {//si es la primera operacion
      acc = cur;
      combOps = acc + "+";
      cur= "";
      showAccDis();
  } else {
      acc = eval(combOps + cur)
      combOps = acc + "+";
      showAccDis();;
      cur= "";
      showCurDis();
  }
}

function modulo(){
  if(combOps === "") {//si es la primera operacion
      acc = cur;
      combOps = acc + "%";
      cur= "";
      showAccDis();
  } else {
      acc = eval(combOps + cur)
      combOps = acc + "%";
      showAccDis();;
      cur= "";
      showCurDis();
  }
}
