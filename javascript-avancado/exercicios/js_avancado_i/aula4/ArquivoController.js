class ArquivoController{
    constructor(){
      this._inputDados = document.querySelector('.dados-arquivo');
    }
    e
    nvia() {
        let arquivo = ArquivoHelper.cria(this._inputDados.value);
        console.log(`Dados do arquivo: ${arquivo.nome}, ${arquivo.tamanho}, ${arquivo.tipo}`);
        this._limpaFormulario();
    }

    _limpaFormuladorio(){
      this._inputDados.value='';
      this._inputDados.focus();
    }
}
