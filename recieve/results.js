let channel;
let voteCounts = { kaiVote: 0, umbuVote: 0, lizVote: 0 };
let displays = {};

function setup() {
  noCanvas();
  createP("Live Vote Count:").style('font-size', '24px');
  
  // 1. Cargar votos guardados al iniciar
  cargarVotosGuardados();
  
  // Crear elementos de visualización
  displays.kaiDisplay = createP("KAI: " + voteCounts.kaiVote).style('margin', '10px');
  displays.umbuDisplay = createP("UMBU: " + voteCounts.umbuVote).style('margin', '10px');
  displays.lizDisplay = createP("LIZ: " + voteCounts.lizVote).style('margin', '10px');
  
  // Configurar el canal de comunicación
  channel = new BroadcastChannel("votes");
  
  // Actualizar cuando llegan nuevos votos
  channel.onmessage = (e) => {
    voteCounts = e.data;
    updateDisplays();
    guardarVotos(); // Guardar en localStorage cuando lleguen actualizaciones
  };
}

function cargarVotosGuardados() {
  const votosGuardados = localStorage.getItem('votosGuardados');
  if (votosGuardados) {
    voteCounts = JSON.parse(votosGuardados);
    console.log("Votos cargados desde localStorage:", voteCounts);
  }
}

function guardarVotos() {
  localStorage.setItem('votosGuardados', JSON.stringify(voteCounts));
}

function updateDisplays() {
  displays.kaiDisplay.html("KAI: " + voteCounts.kaiVote);
  displays.umbuDisplay.html("UMBU: " + voteCounts.umbuVote);
  displays.lizDisplay.html("LIZ: " + voteCounts.lizVote);
}