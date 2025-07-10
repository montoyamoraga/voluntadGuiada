

function nameMode() {
  background(79 );
  rectMode(CENTER);

  /*//////////////////////////////////////
  //lineas guías
  stroke(0);
  strokeWeight(1);
  line(0, height/2, width, height/2);
  line(width/2,0, width/2, height)
  //////////////////////////////////////*/

  //frame mayor
  fill(170);
  noStroke();
  rect(halfX, halfY, 1180, 590, 180);

  //textBox
  noStroke();
  strokeWeight(1);
  stroke(15);
  fill(246, 237, 226);
  rect(halfX, height / 4.5, 540, 70, 4);

  flechas();

  yesNoButtons();

  //////LETTER SCROLL///////////////
  if (letraIndex < 0) {
    letraIndex = abecedario.length - 1;
  } else if (letraIndex >= abecedario.length) {
    letraIndex = 0;
  }
 
  //si escribe más allá del tamaño del texBox, se resetea
  if (textHere.length > 15){
    reseteo();
  }

  //letra del centro
  //fill(0, 11, 90);
  fill(79);
  stroke(79);
  textSize(140);
  textAlign(CENTER, CENTER);
  textFont(fontLinda);
  strokeWeight(6);
  text(abecedario[letraIndex], halfX, halfY - 10);

  // letra anterior (con wrap)
  strokeWeight(2);
  textSize(95);
  let previousLetra = (letraIndex - 1 + abecedario.length) % abecedario.length;
  text(abecedario[previousLetra], halfX - 150, halfY);

  // letra siguiente (con wrap)
  let nextLetra = (letraIndex + 1) % abecedario.length;
  text(abecedario[nextLetra], halfX + 150, halfY);

  fill(79);
  textSize(45);
  noStroke();
  textAlign(LEFT);
  textFont(fontBold);
  text(textHere, halfX - 240, halfY - 206);

  //cursor
  if (frameCount % 60 < 30) {
    stroke(0);
    strokeWeight(4);
    line(
      textWidth(textHere) + halfX - 225,
      halfY - 220,
      textWidth(textHere) + halfX - 225,
      halfY - 180
    );
  }
}

function popUp() {
  //pop up

  fill(0, 110);
  rect(halfX, halfY, 1280, 720);
  //fill(255,0,0);
  fill(190, 210, 240);
  stroke(20);
  //stroke(20,20,120);
  strokeWeight(8);
  rect(halfX, halfY + 20, 800, 510, 50);

  //
  textAlign(CENTER);
  strokeWeight(1);
  fill(20);
  text(
    `quieres darle tu 
apoyo a ` +
      textHere +
      " ?",
    halfX,
    halfY - 1
  );
  yesNoButtons();
}

function yesNoButtons() {
  //botón equis
  //sombra
  noStroke();
  fill(100, 20, 20);
  rect(halfX - 65 + 6, halfY + 200 + 6, 100, 100, 20);
  //color
  fill(235, 30, 30);
  noStroke();
  //fill(200);
  rect(halfX - 65, halfY + 200, 100, 100, 20);
  stroke(250, 250, 250);
  strokeWeight(20);
  strokeCap(SQUARE);
  //equis interna
  line(halfX - 90, halfY + 175, halfX - 40, halfY + 225);
  line(halfX - 40, halfY + 175, halfX - 90, halfY + 225);
  noStroke();

  //ticket
  //sombra boton verde
  fill(20, 120, 20);
  rect(halfX + 65 + 6, halfY + 200 + 6, 100, 100, 20);

  //color verde
  fill(30, 225, 30);
  rect(halfX + 65, halfY + 200, 100, 100, 20);
  /////////////
  stroke(255, 250, 250);
  noFill();
  strokeWeight(20);
  beginShape();
  vertex(halfX + 35, halfY + 200); // izq
  vertex(halfX + 55, halfY + 220); // abajo-medio
  vertex(halfX + 95, halfY + 180); //arriba derexa
  endShape();
}

function flechas(){
//sombras flechas - y +
  push();
  strokeJoin(ROUND);
  stroke(240-80, 155-80, 70-80);
  strokeWeight(100);
  triangle(
    halfX + 429,
    halfY + 9,
    halfX + 339,
    halfY + 59,
    halfX + 339,
    halfY - 50 + 9
  );
  triangle(
    halfX - 420 + 9,
    halfY + 9,
    halfX - 330 + 9,
    halfY + 59,
    halfX - 330 + 9,
    halfY - 50 + 9
  );
  //flechas - y +
  stroke(240, 155, 70);
  triangle(
    halfX + 420,
    halfY,
    halfX + 330,
    halfY + 50,
    halfX + 330,
    halfY - 50
  );
  triangle(
    halfX - 420,
    halfY,
    halfX - 330,
    halfY + 50,
    halfX - 330,
    halfY - 50
  );
  pop();
}

function nuevoComputo(){
        if (greenPressed) {
        if (textHere === 'KAI') {
          votes.kaiVote++;
          lizVote=true;
        } else if (textHere === 'HUMBU') {
          votes.umbuVote++;
          umbuVote=true;
        } else if (textHere === 'LIZDI' || textHere === 'LIZPI') {
          votes.lizVote++;
          lizVote=true;
        } else {
          reseteo();
          return;
        }
         channel.postMessage(votes);
         guardarVotos();
         console.log("Votos actualizados:", votes);
        reseteo();
      }}
  /*if(kaiVote || umbuVote || lizVote){
    channel.onmessage = (event) => {
  votes = event.data;
  console.log("Votos actualizados desde otro tab:", votes);*/

  const peopleCarrusel = ["elKai", "elUmbu", "elLiz"];

function modoConocer(quien){
  background(200);
  //frame mayor
  fill(20);
  noStroke();
  rectMode(CENTER);
imageMode(CENTER);
  //textAlign(CENTER);
  textSize(100);
 //rect(halfX, halfY, 1180, 590, 180);
  flechas();

  
if(quien === 'elKai') { 
    textFont(fontBlack);
    textAlign(LEFT);
text('KAI', halfX-600, halfY-200);
image(kaiAlone, halfX, halfY-10,500,650);
textSize(30);
  textAlign(CENTER);
  textFont(fontRegular)
  text('"Antes éramos felices, si llega alguien más lo arruinará todo"', halfX, halfY+300);
}else if(quien=== 'elUmbu'){
    textFont(fontBlack);
  textAlign(LEFT);
  text('HUMBU', halfX-600, halfY-200);
  image(umbuAlone, halfX, halfY+10,400,550);
textSize(30);
  textAlign(CENTER);
  textFont(fontRegular)
  text('"Yo solo quiero tener amigues con los que jugar :("', halfX, halfY+300);
}else if(quien=== 'elLiz'){
    textFont(fontBlack);
  textSize(80);
  textAlign(LEFT);
  text('LIZPI y LIZDI', halfX-600, halfY-210);
  image(lizAlone, halfX, halfY+10,630,550);
  textSize(30);
  textAlign(CENTER);
  textFont(fontRegular)
  text('"Nos gustaría que pudieramos ser amigues entre todes"', halfX, halfY+300);
}}