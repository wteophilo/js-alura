export class Mensagem{
  // EDGE NÂO SUPORTA constructor COM PARAMETRO OPCIONAL
  //constructor(texto = ""){
  constructor(texto){
    this._texto = texto||'';
  }

  get texto(){
    return this._texto;
  }

  set texto(texto){
    this._texto  = texto;
  }
}
