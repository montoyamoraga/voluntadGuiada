let videoIntro;
let isPlaying = false;
let videoEnded = false;
let interfazInicializada = false;

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
  declararVariables();

  videoIntro.onended(() => {
    videoEnded = true;
    videoIntro.hide();
  });
}

function draw() {
  if (!videoEnded) {
    if (isPlaying && !videoIntro.elt.paused) {
      image(videoIntro, 0, 0, width, height);
    } else {
      dibujarPantallaEspera();
    }
    return;
  }

  // 👇 activamos nameMode una sola vez cuando termina el video
  if (!interfazInicializada) {
    nameModeActive = true;
    interfazInicializada = true;
  }

  // interfaz principal
  background(200);
  if (modoCarruselActive) {
    modoConocer(peopleCarrusel[indexCarruselConocer]);
  } else if (popUpActive) {
    popUp();
  } else if (nameModeActive) {
    nameMode();
  }
}



function dibujarPantallaEspera() {
  background(0);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Presiona cualquier botón para comenzar", width / 2, height / 2);
}

 function mousePressed() {
  if (!videoEnded) {
    if (!isPlaying) {
      isPlaying = true;
      videoIntro.show();
      videoIntro.play();
    }
    return; // 👈 Detiene el resto
  }

  // ... el resto de tu lógica original ...



  // Tu lógica original de flechas y botones
  flechaIzq = false;
  flechaDer = false;
  
  if (mouseX > 160 && mouseX < 420 && mouseY > 200 && mouseY < 520) {
    flechaIzq = true;
  } else if (mouseX > halfX + 160 && mouseX < halfX + 420 && mouseY > 200 && mouseY < 520) {
    flechaDer = true;
  }
  
  manejarFlechas();

  if (popUpActive) {
    if (mouseX > halfX + 15 && mouseX < halfX + 115 && mouseY > halfY + 150 && mouseY < halfY + 250) {
      greenPressed = true;
      nuevoComputo();
    } else if (mouseX > halfX - 115 && mouseX < halfX - 15 && mouseY > halfY + 150 && mouseY < halfY + 250) {
      reseteo();
    }
  } else if (nameModeActive) {
    if (flechaIzq) {
      letraIndex -= 1;
    } else if (flechaDer) {
      letraIndex += 1;
    }
    
    if (mouseX > halfX + 15 && mouseX < halfX + 115 && mouseY > halfY + 150 && mouseY < halfY + 250) {
      textHere += abecedario[letraIndex];
      if (["KAI", "HUMBU", "LIZPI", "LIZDI"].includes(textHere)) {
        popUpActive = true;
        nameModeActive = false;
      }
    } else if (mouseX > halfX - 115 && mouseX < halfX - 15 && mouseY > halfY + 150 && mouseY < halfY + 250) {
      textHere = "";
    }
  }

  if (modoCarruselActive && mouseX > halfX - 100 && mouseX < halfX + 100 && mouseY > halfY - 100 && mouseY < halfY + 100) {
    modoCarruselActive = false;
    nameModeActive = true;
  }
}

function manejarFlechas() {
  if (!flechaIzq && !flechaDer) return;

  if (modoCarruselActive) {
    if (flechaIzq) {
      indexCarruselConocer = (indexCarruselConocer - 1 + peopleCarrusel.length) % peopleCarrusel.length;
      console.log("Anterior personaje:", peopleCarrusel[indexCarruselConocer]);
    } else if (flechaDer) {
      indexCarruselConocer = (indexCarruselConocer + 1) % peopleCarrusel.length;
      console.log("Siguiente personaje:", peopleCarrusel[indexCarruselConocer]);
    }

    modoConocer(peopleCarrusel[indexCarruselConocer]);
  } else if (nameModeActive) {
    if (flechaIzq) {
      letraIndex = (letraIndex - 1 + abecedario.length) % abecedario.length;
      console.log("Letra anterior:", abecedario[letraIndex]);
    } else if (flechaDer) {
      letraIndex = (letraIndex + 1) % abecedario.length;
      console.log("Siguiente letra:", abecedario[letraIndex]);
    }
  }

  flechaIzq = false;
  flechaDer = false;
}

function reseteo() {
  popUpActive = false;
  nameModeActive = true;
  textHere = "";
}
