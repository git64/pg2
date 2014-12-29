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
        var panels;
        (function (panels) {
            var BasePanel = (function (_super) {
                __extends(BasePanel, _super);
                function BasePanel() {
                    _super.call(this);
                    this.element.addClass("dd-ui-panels-base-panel");
                    this.stage.add(this);
                }
                return BasePanel;
            })(dd.ui.BaseUI);
            panels.BasePanel = BasePanel;
        })(panels = ui.panels || (ui.panels = {}));
    })(ui = dd.ui || (dd.ui = {}));
})(dd || (dd = {}));
