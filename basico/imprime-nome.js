var trsPacientes = document.getElementsByClassName("paciente");

percorreArray(trsPacientes,function (pacienteTr) {

    var pacienteAtual = montaPaciente(pacienteTr);

    console.log(pacienteAtual.nome);
});
