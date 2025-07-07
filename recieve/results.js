let channel;
let voteCounts = { kaiVote: 0, umbuVote: 0, lizVote: 0 };
let displays = {}; // Objeto separado para los elementos de visualización

function setup() {
  noCanvas();
  createP("Live Vote Count:").style('font-size', '24px');
  
  // Crear elementos de visualización
  displays.kaiDisplay = createP("KAI: 0").style('margin', '10px');
  displays.umbuDisplay = createP("UMBU: 0").style('margin', '10px');
  displays.lizDisplay = createP("LIZ: 0").style('margin', '10px');
  
  // Configurar el canal de comunicación
  channel = new BroadcastChannel("votes");
  
  // Actualizar cuando llegan nuevos votos
  channel.onmessage = (e) => {
    voteCounts = e.data;
    updateDisplays();
  };
}

function updateDisplays() {
  displays.kaiDisplay.html("KAI: " + voteCounts.kaiVote);
  displays.umbuDisplay.html("UMBU: " + voteCounts.umbuVote);
  displays.lizDisplay.html("LIZ: " + voteCounts.lizVote);
}