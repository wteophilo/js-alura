import {ProxyFactory} from '../services/ProxyFactory';

export class Bind{
  constructor(model,view,...propriedades){
    let proxyFactory = ProxyFactory.create(model,
      propriedades,
      model=> view.update(model)
    );
    view.update(model);
    return proxyFactory;
    }
  }
