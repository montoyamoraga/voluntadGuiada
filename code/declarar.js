function declararVariables(){
  abecedario = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  ];
  //defino frameRate para crearel cursor parpadeante
  frameRate(30);

  //variables del texto
   textHere = "";
  letraIndex = 0;

  //variables de pantallas
  popUpActive = false;
  nameModeActive = true;
  
  //variables para mejorar la legibilidad
  halfX = width / 2;
  halfY = height / 2;
}