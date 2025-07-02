let halfX;
let halfY;

let nombreEscritoCheck;
let letraIndex;
let eleccion;
let abecedario;
let textoConfirmacion;

let previusLetra;
let nextLetra;

let greenPressed;
let redPressed;

let confirmVote = `¿quieres darle tu, 
  apoyo a`;

let kaiVote;
let umbuVote;
let lizVote;

let confirmo;

let nameModeActive;
let popUpActive;


function setup() {
  createCanvas(1280, 720);

  halfX = width / 2;
  halfY = height / 2;

  preload();

  abecedario = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  frameRate(30);

  //nombreEscritoCheck = false;
  popUpActive = false;
  textHere = "";
  letraIndex = 0;
  nameModeActive = true;
}

function draw() {
  //empieza con el modo nombre
  background(200);

  //si el texto excrito
  if (
    textHere === "KAI" ||
    textHere === "UMBU" ||
    textHere === "LIZ" ||
    textHere === "LIF" ||
    textHere === "A"
  ) {
    popUpActive = true;
  }

  if (popUpActive) {
    popUp();
  } else if (nameModeActive) {
    nameMode();
  }
}

function mousePressed() {
 

  if (popUpActive) {
    // BOTÓN VERDE en popup 
    if (
      mouseX > halfX + 15 &&
      mouseX < halfX + 115 &&
      mouseY > halfY + 150 &&
      mouseY < halfY + 250
    ) {
      /*if (popUpActive && greenPressed) {
  if (textHere === "KAI") {
    votes.kai++;
    kaiVote = true;
  } 
  else if (textHere === "UMBU") {
    votes.umbu++;
    umbuVote = true;
  } 
  else if (textHere === "LIZ") {
    votes.liz++;
    lizVote = true;
  }
  
  // Enviar votos actualizados a otros tabs
  channel.postMessage(votes);*/
      
      reseteo();
      
    } else if (//boton rojo en popUp
      mouseX > halfX - 115 &&
      mouseX < halfX - 15 &&
      mouseY > halfY + 150 &&
      mouseY < halfY + 250
    ) {
      reseteo();
    
    }
  } else if (nameModeActive) {
    if (mouseX > 160 && mouseX < 420 && mouseY > 200 && mouseY < 520) {
      //background(0);
      letraIndex -= 1; //flecha hacia la izq
    } else if (
      mouseX > halfX + 160 &&
      mouseX < halfX + 420 &&
      mouseY > 200 &&
      mouseY < 520
    ) {
      //background(0);
      letraIndex += 1; //flecha hacia la der
    }
    // BOTÓN VERDE en nameMode - Añadir letra
    if (
      mouseX > halfX + 15 &&
      mouseX < halfX + 115 &&
      mouseY > halfY + 150 &&
      mouseY < halfY + 250
    ) {
      textHere += abecedario[letraIndex];
      if (["KAI", "UMBU", "LIZ", "LIF"].includes(textHere)) {
        popUpActive = true;
        nameModeActive = false;
      }
    }
    // BOTÓN ROJO en nameMode - Borrar
    else if (
      mouseX > halfX - 115 &&
      mouseX < halfX - 15 &&
      mouseY > halfY + 150 &&
      mouseY < halfY + 250
    ) {
      textHere = "";
    }
  }
}

function reseteo(){
  popUpActive = false;
  nameModeActive=true;
  textHere= "";
}

