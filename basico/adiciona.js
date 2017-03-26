var btAdd = document.querySelector('#adicionar-paciente');

btAdd.addEventListener('click',function(event){

  event.preventDefault();

  var inputNome = document.querySelector('#campo-nome');
  var inputPeso = document.querySelector('#campo-peso');
  var inputAltura = document.querySelector('#campo-altura');

  var novoTr = "<tr class='paciente'>"+
      "<td class='info-nome'>"+inputNome.value+"</td>"+
      "<td class='info-peso'>"+inputPeso.value+"</td>"+
      "<td class='info-altura'>"+inputAltura.value+"</td>"+
      "<td class='info-imc'></td>"+
  "</tr>";

  var tabela = document.querySelector('table');
  tabela.innerHTML += novoTr;

  inputPeso.value = "";
  inputAltura.value = "";
  inputNome.value="";
});
