var dd;
(function (dd) {
    (function (ui) {
        var BaseUI = (function () {
            function BaseUI() {
                this.element = $("<div><div>");
                this.element.addClass("dd-ui-base-ui");
            }
            return BaseUI;
        })();
        ui.BaseUI = BaseUI;
    })(dd.ui || (dd.ui = {}));
    var ui = dd.ui;
})(dd || (dd = {}));
