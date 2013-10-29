var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dd;
(function (dd) {
    (function (panels) {
        var BasePanel = (function (_super) {
            __extends(BasePanel, _super);
            function BasePanel() {
                _super.call(this);
            }
            BasePanel.prototype.notify = function (message) {
                var noti = new dd.ui.Notification(message);
                this.element.append(noti.element);
                return noti;
            };
            return BasePanel;
        })(dd.ui.BaseUI);
        panels.BasePanel = BasePanel;
    })(dd.panels || (dd.panels = {}));
    var panels = dd.panels;
})(dd || (dd = {}));
