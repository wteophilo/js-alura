var campos=[
  document.querySelector("#data"),
  document.querySelector("#quantidade"),
  document.querySelector("#valor")
];

var volume = valor * quantidade;



var bt = document.querySelector("#incluir");
bt.addEventListener('click',function(event){
  event.preventDefault();

  var tabela = document.querySelector('table  tbody');

  var novotr = document.createElement("tr");
  campos.forEach(function(campo){
      var novoTd = document.createElement('td');
      novoTd.context
  });



  tabela.appendChild(novoTr);

  console.log(data);
  console.log(quantidade);
  console.log(valor);
});
