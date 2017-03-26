var button = document.getElementById('calcula-imcs');
button.addEventListener('click',function(){
  var trsPacientes = document.getElementsByClassName("paciente");
  percorreArray(trsPacientes, function(pacienteTr){

      var pacienteAtual = montaPaciente(pacienteTr);

      var imc = pacienteAtual.pegaImc();

      var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
      tdImc.textContent = imc;

      console.log(imc);
  });

});
