"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scope = require("@dekproject/scope");

var _request = require("request");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Comtele = function () {
    function Comtele(authKey, Sender) {
        _classCallCheck(this, Comtele);

        this.authKey = authKey;
        this.Sender = Sender;
    }

    _createClass(Comtele, [{
        key: "send",
        value: function send(Receivers, Content) {
            (0, _request2.default)({
                method: "POST",
                url: "https://sms.comtele.com.br/api/v2/send",
                headers: {
                    "content-type": "application/json",
                    "auth-key": this.authKey
                }
            }, {
                Sender: this.Sender,
                Receivers: Receivers,
                Content: Content
            }, function (error, response, body) {
                if (error) throw new Error(error);
                console.log(body);
            });
        }
    }]);

    return Comtele;
}();

exports.default = function () {
    try {
        if (!process.env.hasOwnProperty('COMTELE_KEY') || !process.env.hasOwnProperty('COMTELE_SENDER')) {
            console.log('[ Comtele ] - There is no COMTELE_KEY or COMTELE_SENDER variable in the .env file.');
        } else {
            var comtele = new Comtele(process.env.COMTELE_KEY, process.env.COMTELE_SENDER);
            _scope.$.set("comtele", comtele);
        }
    } catch (e) {
        console.log("[ Comtele ] - " + e.message);
    }
};
//# sourceMappingURL=index.js.map