class NegociacaoController {

    constructor() {
      let $ = document.querySelector.bind(document);
      this._inputData = $('#data');
      this._inputQuantidade = $('#quantidade');
      this._inputValor = $('#valor');

      this._listaNegociacoes= new Bind(
        new ListaNegociacoes(),
        new NegociacoesView($('#negociacoesView')),
        'adiciona','esvazia','ordena','inverteOrdem'
      );

      this._mensagem = new Bind(
        new Mensagem(),
        new MensagemView($('#mensagemView')),
        'texto'
      );
      this._ordenacaoAtual = "";
    }

    adiciona(event) {
      event.preventDefault();
      try{
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = "Negociação adicionada com sucesso";
        this._limpaFormulario();
      }catch(erro){
        this._mensagem.texto = erro;
      }

    }

    importandoNegociacoes(){
      let service = new NegociacaoService();
      service.
        obterNegociacoes()
        .then(negociacoes=>{
          negociacoes.forEach(negociacao=> this._listaNegociacoes.adiciona(negociacao));
          this._mensagem.texto = 'Negociações do periodo importadas com sucesso'
        })
        .catch(error=> this._mensagem.texto=error);
    }

    apaga(event){
      this._listaNegociacoes.esvazia();
      this._mensagem.texto= "Negociacoes apagadas com sucesso.";
    }


    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0

        this._inputData.focus();
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    ordena(coluna){
      if(this._ordenacaoAtual == coluna){
        this._listaNegociacoes.inverteOrdem();
      }else{
        this._listaNegociacoes.ordena((a,b)=> a[coluna] - b[coluna]);
      }

      this._ordenacaoAtual =  coluna;
    }
}
