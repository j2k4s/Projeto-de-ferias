function getValue(){
    var value = document.getElementById("nome").value;
    document.getElementById("resultado").innerHTML = "Bem vindes, " + value + "!";
}

function removeValue(){
  document.getElementById("nome").value = "";
  document.getElementById("resultado").innerHTML = "";
}