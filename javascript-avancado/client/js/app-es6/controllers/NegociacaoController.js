import {ListaNegociacoes} from '../models/ListaNegociacoes';
import {Mensagem} from '../models/Mensagem';
import {NegociacoesView} from '../view/NegociacoesView';
import {MensagemView} from '../view/MensagemView';
import {NegociacaoService} from '../services/NegociacoesService';
import {DateHelper} from '../helper/DateHelper';
import {Bind} from '../helper/Bind';
import {Negociacao} from '../models/Negociacao';

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
      this._service = new NegociacaoService();
      this._init();
    }


    _init(){
        this._service
        .lista()
        .then(negociacoes =>
           negociacoes.forEach(negociacao=>
             this._listaNegociacoes.adiciona(negociacao)))
        .catch(erro => {
          console.log(erro);
          this_mensagem.texto = error;
        });

        setInterval(()=>{
          this._importandoNegociacoes();
        },3000);

    }

    adiciona(event) {
      event.preventDefault();
      let negociacao = this._criaNegociacao();
      this._service
        .cadastra(negociacao)
        .then(mensagem =>{
           this._listaNegociacoes.adiciona(negociacao);
           this._mensagem.texto = mensagem;
           this._limpaFormulario();
         })
         .catch(erro => this._mensagem.texto = erro);
    }

    _importandoNegociacoes(){
        this._service
        .obterNegociacoes()
        .then(negociacoes => negociacoes.forEach(negociacao =>{
          this._listaNegociacoes.adiciona(negociacao);
          this._mensagem.texto = 'Negociação do período importadas'
        }))
        .catch(erro => this._mensagem.texto = erro);
    }

    apaga(){
      this._service
        .apagarTodos()
        .then(mensagem => {
          this._mensagem.texto= mensagem;
          this._listaNegociacoes.esvazia();
        })
        .catch(erro => this_mensagem.texto = erro);
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
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value));
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
let negociacaoController = new NegociacaoController();

//Criando um singleton
export function currentInstance() {

    return negociacaoController;

}
