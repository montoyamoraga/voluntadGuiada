let halfX;
let halfY;

let nombreEscritoCheck;
let letraIndex;
//let eleccion;
let abecedario;
let textoConfirmacion;

let previusLetra;
let nextLetra;

let greenPressed;
let redPressed;

let confirmVote = `¿quieres darle tu, 
  apoyo a`;

//let confirmo;

let nameModeActive;
let popUpActivo;

let votes = {
  kaiVote: 0,
  umbuVote: 0,
  lizVote: 0,
};

const characters = ["KAI", "UMBU", "LIZ"];
const channel = new BroadcastChannel("decisiones");




let fontLinda;

function preload() {
  fontLinda = loadFont("/fonts/chelseaMrkt-reg.ttf");
}
