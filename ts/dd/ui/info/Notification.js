var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dd;
(function (dd) {
    (function (ui) {
        (function (info) {
            var Notification = (function (_super) {
                __extends(Notification, _super);
                function Notification(message) {
                    var _this = this;
                    _super.call(this, message);
                    this.element.text(message);
                    this.element.addClass("dd-ui-info-notification");
                    this.element.bind("click.notification", function (evt) {
                        return _this.handleClick(evt);
                    });
                    this.signalAdded.add(this.onAdded, this);
                    //            this.signalTick.once(this.onTick, this);
                }
                Notification.prototype.onTick = function () {
                    console.log("TICK");
                };

                Notification.prototype.onAdded = function (target, parent) {
                    console.log("ADDED");
                };

                Notification.prototype.handleClick = function (evt) {
                    var _this = this;
                    this.element.slideUp(300, function () {
                        return _this.dispose();
                    });
                    evt.stopPropagation();
                    return false;
                };

                Notification.prototype.dispose = function () {
                    this.element.unbind("click.notification");
                    _super.prototype.dispose.call(this);
                };
                return Notification;
            })(dd.ui.info.BaseInfo);
            info.Notification = Notification;
        })(ui.info || (ui.info = {}));
        var info = ui.info;
    })(dd.ui || (dd.ui = {}));
    var ui = dd.ui;
})(dd || (dd = {}));
