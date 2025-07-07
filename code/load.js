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
let popUpActive;

let votes = {
  kaiVote: 0,
  umbuVote: 0,
  lizVote: 0,
};

const characters = ["KAI", "HUMBU", "LIZ"];
const channel = new BroadcastChannel("votes");




let fontLinda;
let fontRegular;
let fontMedium;
let fontSemiBold;
let fontBold;
let fontExtraBold;
let fontBlack;


function preload() {
  fontLinda = loadFont("./fonts/chelseaMrkt-reg.ttf");
  fontRegular = loadFont("./fonts/mirador-regular.otf");
  fontMedium = loadFont("./fonts/mirador-medium.otf");
  fontSemiBold = loadFont("./fonts/mirador-semibold.otf");
  fontBold = loadFont("./fonts/mirador-bold.otf");
  fontExtraBold = loadFont("./fonts/mirador-extrabold.otf");
  fontBlack = loadFont("./fonts/mirador-black.otf");
}
