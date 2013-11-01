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
                    this.element.click(function (evt) {
                        return _this.handleClick(evt);
                    });
                }
                Notification.prototype.handleClick = function (evt) {
                    this.element.slideUp(300, function () {
                        $(this).remove();
                    });
                    evt.stopPropagation();
                    return false;
                };
                return Notification;
            })(dd.ui.info.BaseInfo);
            info.Notification = Notification;
        })(ui.info || (ui.info = {}));
        var info = ui.info;
    })(dd.ui || (dd.ui = {}));
    var ui = dd.ui;
})(dd || (dd = {}));
