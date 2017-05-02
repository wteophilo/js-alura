let funcionario = {email: 'abc@abc.com'};
let funcionarioProxy = new Proxy(funcionario,  {

    set(target, prop, value, receiver) {
        console.log(`Valor antigo ${target[prop]}, valor atual: ${value}`);
        return Reflect.set(target, prop, value, receiver);
    }

});
funcionarioProxy.email = 'aaa@aaa.com';
