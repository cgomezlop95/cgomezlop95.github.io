const foto = document.getElementById("foto");

function infoClick() {
  alert(
    "Hola, soy Cris, haz clic en cada uno de los 3 botones para saber más sobre mí"
  );
}

foto.addEventListener("click", infoClick);

// Al hacer clic en mi foto (ID único llamado foto), salta una alerta a modo de ventana emergente//

// Aquí debajo, voy a escribir un texto mediante funciones, que solo quiero que aparezca al hacer clic//
function Education() {
  return "He estudiado Turismo y Administración de Empresas.";
}

function Experience() {
  return "He trabajado como recepcionista de hotel y dando soporte a usuarios de la app SAP Concur. Actualmente trabajo a tiempo parcial en la oficina de turismo de Madrid, y curso el bootcamp de Desarrollo Web Full Stack en The Bridge.";
}

function Future() {
  return "En el futuro, me gustaría aplicar la parte del desarrollo web a páginas webs relacionadas con el turismo y la hospitalidad.";
}
