"use strict";

var selectPerson;

function gerarTexto() {
  selectPerson = document.getElementById("people").value; // for (var i = 0; i < personagens.length; i++) {
  //     if (selectPerson == personagens[i].name) {
  //         document.getElementById("name").innerHTML = personagens[i].name
  //         document.getElementById("userName").innerHTML = personagens[i].userName
  //         document.getElementById("showM").value = personagens[i].frase
  //         document.getElementById("picUser").src = personagens[i].url
  //     }
  // }

  personagens.forEach(function (p) {
    if (selectPerson == p.name) {
      document.getElementById("name").innerHTML = p.name;
      document.getElementById("userName").innerHTML = p.userName;
      document.getElementById("showM").value = p.frase;

      if (p.url == undefined) {
        p.url = "./src/images/avatarPadrao.png";
      } else {
        document.getElementById("picUser").src = p.url;
      }
    }
  }); //data e hora

  var zeroFill = function zeroFill(n) {
    return ('0' + n).slice(-2);
  }; // Pega o horário atual


  var now = new Date(); // Formata a data conforme dd/mm/aaaa hh:ii:ss

  var dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill(now.getMonth() + 1) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds()); // Exibe na tela usando a div#data-hora

  document.getElementById('dataHora').innerHTML = dataHora;
}