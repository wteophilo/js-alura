let funcinario = {email: 'abc@abc.com'};
let funcionarioProxy = new Proxy(funcionario,{
  get (target,prop,receiver){
    return Reflect.apply(target,prop.receiver);
  }
});

console.log(funcionarioProxy.email);
