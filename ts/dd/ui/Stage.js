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

                this.resize();
                $(window).bind("resize", function () {
                    return _this.resize();
                });

                this.setupTick();

                this.tick();
            }
            Stage.prototype.resize = function () {
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

            Stage.prototype.notify = function (message) {
                var noti = new dd.ui.info.Notification(message);
                this.add(noti);
                return noti;
            };

            Stage.prototype.toast = function (message) {
                var tst = new dd.ui.info.Toast(message);
                this.add(tst);
                return tst;
            };

            //source: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
            Stage.prototype.setupTick = function () {
                var lastTime = 0;
                var vendors = ['webkit', 'moz'];
                for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
                    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
                }

                if (!window.requestAnimationFrame)
                    window.requestAnimationFrame = function (callback) {
                        var currTime = new Date().getTime();
                        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                        var id = window.setTimeout(function () {
                            callback(currTime + timeToCall);
                        }, timeToCall);
                        lastTime = currTime + timeToCall;
                        return id;
                    };

                if (!window.cancelAnimationFrame)
                    window.cancelAnimationFrame = function (id) {
                        clearTimeout(id);
                    };
            };

            Stage.prototype.tick = function () {
                var _this = this;
                window.requestAnimationFrame(function () {
                    return _this.tick();
                });
                this.signalTick.dispatch();
            };
            return Stage;
        })(dd.ui.BaseUI);
        ui.Stage = Stage;
    })(dd.ui || (dd.ui = {}));
    var ui = dd.ui;
})(dd || (dd = {}));
