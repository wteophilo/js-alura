'use strict';

System.register(['../models/ListaNegociacoes', '../models/Mensagem', '../view/NegociacoesView', '../view/MensagemView', '../services/NegociacoesService', '../helper/DateHelper', '../helper/Bind', '../models/Negociacao'], function (_export, _context) {
  "use strict";

  var ListaNegociacoes, Mensagem, NegociacoesView, MensagemView, NegociacaoService, DateHelper, Bind, Negociacao, _createClass, NegociacaoController, negociacaoController;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_modelsListaNegociacoes) {
      ListaNegociacoes = _modelsListaNegociacoes.ListaNegociacoes;
    }, function (_modelsMensagem) {
      Mensagem = _modelsMensagem.Mensagem;
    }, function (_viewNegociacoesView) {
      NegociacoesView = _viewNegociacoesView.NegociacoesView;
    }, function (_viewMensagemView) {
      MensagemView = _viewMensagemView.MensagemView;
    }, function (_servicesNegociacoesService) {
      NegociacaoService = _servicesNegociacoesService.NegociacaoService;
    }, function (_helperDateHelper) {
      DateHelper = _helperDateHelper.DateHelper;
    }, function (_helperBind) {
      Bind = _helperBind.Bind;
    }, function (_modelsNegociacao) {
      Negociacao = _modelsNegociacao.Negociacao;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      NegociacaoController = function () {
        function NegociacaoController() {
          _classCallCheck(this, NegociacaoController);

          var $ = document.querySelector.bind(document);

          this._inputData = $('#data');
          this._inputQuantidade = $('#quantidade');
          this._inputValor = $('#valor');

          this._listaNegociacoes = new Bind(new ListaNegociacoes(), new NegociacoesView($('#negociacoesView')), 'adiciona', 'esvazia', 'ordena', 'inverteOrdem');

          this._mensagem = new Bind(new Mensagem(), new MensagemView($('#mensagemView')), 'texto');
          this._ordenacaoAtual = "";
          this._service = new NegociacaoService();
          this._init();
        }

        _createClass(NegociacaoController, [{
          key: '_init',
          value: function _init() {
            var _this = this;

            this._service.lista().then(function (negociacoes) {
              return negociacoes.forEach(function (negociacao) {
                return _this._listaNegociacoes.adiciona(negociacao);
              });
            }).catch(function (erro) {
              console.log(erro);
              this_mensagem.texto = error;
            });

            setInterval(function () {
              _this._importandoNegociacoes();
            }, 3000);
          }
        }, {
          key: 'adiciona',
          value: function adiciona(event) {
            var _this2 = this;

            event.preventDefault();
            var negociacao = this._criaNegociacao();
            this._service.cadastra(negociacao).then(function (mensagem) {
              _this2._listaNegociacoes.adiciona(negociacao);
              _this2._mensagem.texto = mensagem;
              _this2._limpaFormulario();
            }).catch(function (erro) {
              return _this2._mensagem.texto = erro;
            });
          }
        }, {
          key: '_importandoNegociacoes',
          value: function _importandoNegociacoes() {
            var _this3 = this;

            this._service.obterNegociacoes().then(function (negociacoes) {
              return negociacoes.forEach(function (negociacao) {
                _this3._listaNegociacoes.adiciona(negociacao);
                _this3._mensagem.texto = 'Negociação do período importadas';
              });
            }).catch(function (erro) {
              return _this3._mensagem.texto = erro;
            });
          }
        }, {
          key: 'apaga',
          value: function apaga() {
            var _this4 = this;

            this._service.apagarTodos().then(function (mensagem) {
              _this4._mensagem.texto = mensagem;
              _this4._listaNegociacoes.esvazia();
            }).catch(function (erro) {
              return this_mensagem.texto = erro;
            });
          }
        }, {
          key: '_limpaFormulario',
          value: function _limpaFormulario() {
            this._inputData.value = '';
            this._inputQuantidade.value = 1;
            this._inputValor.value = 0.0;

            this._inputData.focus();
          }
        }, {
          key: '_criaNegociacao',
          value: function _criaNegociacao() {
            return new Negociacao(DateHelper.textoParaData(this._inputData.value), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
          }
        }, {
          key: 'ordena',
          value: function ordena(coluna) {
            if (this._ordenacaoAtual == coluna) {
              this._listaNegociacoes.inverteOrdem();
            } else {
              this._listaNegociacoes.ordena(function (a, b) {
                return a[coluna] - b[coluna];
              });
            }

            this._ordenacaoAtual = coluna;
          }
        }]);

        return NegociacaoController;
      }();

      negociacaoController = new NegociacaoController();
      function currentInstance() {

        return negociacaoController;
      }

      _export('currentInstance', currentInstance);
    }
  };
});