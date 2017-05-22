'use strict';

System.register(['../services/ProxyFactory'], function (_export, _context) {
  "use strict";

  var ProxyFactory, Bind;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_servicesProxyFactory) {
      ProxyFactory = _servicesProxyFactory.ProxyFactory;
    }],
    execute: function () {
      _export('Bind', Bind = function Bind(model, view) {
        _classCallCheck(this, Bind);

        for (var _len = arguments.length, propriedades = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          propriedades[_key - 2] = arguments[_key];
        }

        var proxyFactory = ProxyFactory.create(model, propriedades, function (model) {
          return view.update(model);
        });
        view.update(model);
        return proxyFactory;
      });

      _export('Bind', Bind);
    }
  };
});