var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dd;
(function (dd) {
    (function (ui) {
        var Stage = (function (_super) {
            __extends(Stage, _super);
            function Stage(container) {
                var _this = this;
                _super.call(this);
                this._stageWidth = 0;
                this._stageHeight = 0;

                dd.ui.BaseUI.stage = this;

                this.element.addClass("dd-ui-stage");
                this._container = container;
                this._container.append(this.element);
                this.refreshSize();
                $(window).bind("resize", function () {
                    return _this.refreshSize();
                });
            }
            Stage.prototype.refreshSize = function () {
                this._stageWidth = this.element.width();
                this._stageHeight = this.element.height();
            };

            Object.defineProperty(Stage.prototype, "stageWidth", {
                get: function () {
                    return this._stageWidth;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Stage.prototype, "stageHeight", {
                get: function () {
                    return this._stageHeight;
                },
                enumerable: true,
                configurable: true
            });
            return Stage;
        })(ui.BaseUI);
        ui.Stage = Stage;
    })(dd.ui || (dd.ui = {}));
    var ui = dd.ui;
})(dd || (dd = {}));
