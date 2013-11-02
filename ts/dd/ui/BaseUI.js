var dd;
(function (dd) {
    (function (ui) {
        var BaseUI = (function () {
            function BaseUI() {
                this._parent = null;
                this._element = $("<div><div>");
                this._element.addClass("dd-ui-base-ui");
            }
            Object.defineProperty(BaseUI.prototype, "parent", {
                get: function () {
                    return this._parent;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(BaseUI.prototype, "stage", {
                get: function () {
                    return BaseUI.stage;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(BaseUI.prototype, "element", {
                get: function () {
                    return this._element;
                },
                enumerable: true,
                configurable: true
            });

            BaseUI.prototype.add = function (baseUI) {
                baseUI._parent = this;
                this._element.append(baseUI.element);
                return baseUI;
            };

            BaseUI.prototype.remove = function () {
                this._element.remove();
                this._parent = null;
            };

            BaseUI.prototype.dispose = function () {
                this.remove();
                this._element = null;
            };
            return BaseUI;
        })();
        ui.BaseUI = BaseUI;
    })(dd.ui || (dd.ui = {}));
    var ui = dd.ui;
})(dd || (dd = {}));
