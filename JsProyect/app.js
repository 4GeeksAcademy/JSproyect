function generatorExcuse() {
  //ARRAYS:
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = ["before the class","when I was sleeping","while I was exercising", "during my lunch","while I was praying",];

  // ELEMENTOS ALEATORIOS:

  let rndmWho = who[Math.floor(Math.random() * who.length)];
  // Toma un valor random del array who y con el who*length para que no sea menos o mas largo del array.

  let rndmAction = action[Math.floor(Math.random() * action.length)];
  let rndmWhat = what[Math.floor(Math.random() * what.length)];
  let rndmWhen = when[Math.floor(Math.random() * when.length)];

  //Genera excusa aleatoria:
  let excuse = `${rndmWho} ${rndmAction} ${rndmWhat} ${rndmWhen}.` ;
  //alt96 `;

  // Selecciona elemento en HTML random por el atributo id.

  document.getElementById("excuse").innerHTML = excuse;
}
