channel.onmessage = function(event) {
  votes = event.data;
  console.log("Votos actualizados desde otro tab:", votes);
};

function cargarVotosGuardados() {
  const votosGuardados = localStorage.getItem('votosGuardados');
  if (votosGuardados) {
    votes = JSON.parse(votosGuardados);
    channel.postMessage(votes); // Sincronizar con otros tabs
  }
}

function guardarVotos() {
  localStorage.setItem('votosGuardados', JSON.stringify(votes));
  channel.postMessage(votes); // Transmitir cambios
}

function setup() {
  createCanvas(1280, 720);

  preload();

  declararVariables();
  
}



function draw() {
  //empieza con el modo nombre
  background(200);
  if(modoCarruselActive){
modoConocer(peopleCarrusel[indexCarruselConocer]);
}else  if(popUpActive) {
    popUp();
  } else if (nameModeActive) {
    nameMode();
  }
  print('kai:'+votes.kaiVote, 'umbu:'+votes.umbuVote, 'liz:'+votes.lizVote);
}

function mousePressed() {
  flechaIzq = false;
  flechaDer = false;
if  (mouseX > 160 && mouseX < 420 && mouseY > 200 && mouseY < 520) {
      //background(0);
    flechaIzq = true;
    } else if (mouseX > halfX + 160 && mouseX < halfX + 420 && mouseY > 200 && mouseY < 520) {
      //background(0);
      flechaDer=true; //flecha hacia la der
    }
manejarFlechas();

  if (popUpActive) {
    // BOTÓN VERDE en popup
    if (
      mouseX > halfX + 15 &&
      mouseX < halfX + 115 &&
      mouseY > halfY + 150 &&
      mouseY < halfY + 250
    ) {
      greenPressed = true;

nuevoComputo();
    }
        
       else if (
      //boton rojo en popUp
      mouseX > halfX - 115 &&
      mouseX < halfX - 15 &&
      mouseY > halfY + 150 &&
      mouseY < halfY + 250
    ) {
      reseteo();
    }
  } else if (nameModeActive) {
    if (flechaIzq) {
      //background(0);
      letraIndex -= 1; //flecha hacia la izq
    } else if (
     flechaDer) {
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
      if (["KAI", "HUMBU", "LIZPI", "LIZDI"].includes(textHere)) {
        popUpActive = true;
        nameModeActive = false;
      }
    }else if (
      mouseX > halfX - 115 &&
      mouseX < halfX - 15 &&
      mouseY > halfY + 150 &&
      mouseY < halfY + 250
    ) {
    // BOTÓN ROJO en nameMode - Borrar

      textHere = "";
    }
  }
}

function manejarFlechas() {
  // Solo procesar si alguna flecha está activa
  if (!flechaIzq && !flechaDer) return;

  // Modo Carrusel de Personajes
  if (modoCarruselActive) {
    if (flechaIzq) {
      indexCarruselConocer = (indexCarruselConocer - 1 + peopleCarrusel.length) % peopleCarrusel.length;
      console.log("Anterior personaje:", peopleCarrusel[indexCarruselConocer]);
    } 
    else if (flechaDer) {
      indexCarruselConocer = (indexCarruselConocer + 1) % peopleCarrusel.length;
      console.log("Siguiente personaje:", peopleCarrusel[indexCarruselConocer]);
    }
    
    // Actualizar visualización del carrusel
    modoConocer(peopleCarrusel[indexCarruselConocer]);
  }
  // Modo Selección de Letras
  else if (nameModeActive) {
    if (flechaIzq) {
      letraIndex = (letraIndex - 1 + abecedario.length) % abecedario.length;
      console.log("Letra anterior:", abecedario[letraIndex]);
    } 
    else if (flechaDer) {
      letraIndex = (letraIndex + 1) % abecedario.length;
      console.log("Siguiente letra:", abecedario[letraIndex]);
    }
  }

  // Resetear estados de flechas después de procesar
  flechaIzq = false;
  flechaDer = false;
}

function reseteo() {
  popUpActive = false;
  nameModeActive = true;
  textHere = "";
}

function dibujarPantallaInicio() {
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Haz click o mueve el mouse para comenzar", width/2, height/2);
}
