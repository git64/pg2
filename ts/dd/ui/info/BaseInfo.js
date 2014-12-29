var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dd;
(function (dd) {
    var ui;
    (function (ui) {
        var info;
        (function (info) {
            var BaseInfo = (function (_super) {
                __extends(BaseInfo, _super);
                function BaseInfo(message) {
                    this._message = message;
                    _super.call(this);
                }
                Object.defineProperty(BaseInfo.prototype, "message", {
                    get: function () {
                        return this._message;
                    },
                    set: function (value) {
                        this._message = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return BaseInfo;
            })(dd.ui.BaseUI);
            info.BaseInfo = BaseInfo;
        })(info = ui.info || (ui.info = {}));
    })(ui = dd.ui || (dd.ui = {}));
})(dd || (dd = {}));
