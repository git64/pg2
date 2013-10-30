var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dd;
(function (dd) {
    (function (ui) {
        var Notification = (function (_super) {
            __extends(Notification, _super);
            function Notification(message) {
                this._message = message;
                _super.call(this);
            }
            Notification.prototype.create = function () {
                var _this = this;
                var msg = $("<div>" + this._message + "</div>");
                msg.addClass("notification");
                msg.click(function (evt) {
                    return _this.handleClick(evt);
                });
                return msg;
            };

            Notification.prototype.handleClick = function (evt) {
                this.element.slideUp(300, function () {
                    $(this).remove();
                });
                evt.stopPropagation();
                return false;
            };
            return Notification;
        })(dd.ui.BaseUI);
        ui.Notification = Notification;
    })(dd.ui || (dd.ui = {}));
    var ui = dd.ui;
})(dd || (dd = {}));
