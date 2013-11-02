var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dd;
(function (dd) {
    (function (ui) {
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
        })(ui.panels || (ui.panels = {}));
        var panels = ui.panels;
    })(dd.ui || (dd.ui = {}));
    var ui = dd.ui;
})(dd || (dd = {}));
