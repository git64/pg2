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
            var Toast = (function (_super) {
                __extends(Toast, _super);
                function Toast(message) {
                    _super.call(this, message);
                    this.element.addClass("dd-ui-info-toast");
                }
                Toast.prototype.create = function () {
                    var _this = this;
                    var msg = $("<div>" + this.message + "</div>");
                    msg.addClass("toast");
                    msg.click(function (evt) {
                        return _this.onClick(evt);
                    });
                    return msg;
                };

                Toast.prototype.onClick = function (evt) {
                    this.element.slideUp(300, function () {
                        $(this).remove();
                    });
                    evt.stopPropagation();
                    return false;
                };
                return Toast;
            })(dd.ui.info.BaseInfo);
            info.Toast = Toast;
        })(ui.info || (ui.info = {}));
        var info = ui.info;
    })(dd.ui || (dd.ui = {}));
    var ui = dd.ui;
})(dd || (dd = {}));
