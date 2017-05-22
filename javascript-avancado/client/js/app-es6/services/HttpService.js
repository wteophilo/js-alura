export class HttpService{

  _handleErrors(resposta){
    if(!resposta) throw Error(resposta.statusText);
    return  resposta
  }
    get(url){
      return fetch(url)
            .then(resposta => this._handleErrors(resposta))
            .then(resposta => resposta.json());
    }

    post(url, dado) {
      return fetch(url,{
              headers:{'Content-type':'aplication/json'},
              method:'post',
              body: JSON.stringify(dado)
            })
            .then(resposta => this._handleErrors(resposta));
    }
}
