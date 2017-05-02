let funcinario = {email: 'abc@abc.com'};
let funcionarioProxy = new Proxy(funcionario,{
  get (target,prop,receiver){
    console.log('Armadinha aqui');
    return '**'+ Reflect.get(target,prop.receiver)+'***';
  }
});

console.log(funcionarioProxy.email);
