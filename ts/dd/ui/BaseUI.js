var dd;
(function (dd) {
    (function (ui) {
        var BaseUI = (function () {
            function BaseUI() {
                this.element = this.create();
                if (!this.element) {
                    console.log("If you extend the BaseUI implement the abstract create():JQuery method returning a valid object.");
                    return;
                }
                this.element.addClass("base-ui");
            }
            BaseUI.prototype.create = function () {
                return null;
            };
            return BaseUI;
        })();
        ui.BaseUI = BaseUI;
    })(dd.ui || (dd.ui = {}));
    var ui = dd.ui;
})(dd || (dd = {}));
