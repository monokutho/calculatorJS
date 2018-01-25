export default class Display {

  constructor() {

  }

  showCurDis (){
    current.innerHTML = cur;//actualiza el display cur, cuando se clica un numero
    if(acc === ""){
        accumulated.innerHTML = acc;
    }
  }

  showAccDis () {
    showCurDis ()
    accumulated.innerHTML = combOps;
  }
}
