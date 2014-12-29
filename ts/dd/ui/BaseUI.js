var dd;
(function (dd) {
    var ui;
    (function (ui) {
        var BaseUI = (function () {
            function BaseUI() {
                //target:BaseUI, parent:BaseUI
                this.signalAdded = new dd.core.Signal();
                //target:BaseUI, parent:BaseUI
                this.signalRemoved = new dd.core.Signal();
                this._parent = null;
                this._element = $("<div></div>");
                this._element.addClass("dd-ui-base-ui");
            }
            Object.defineProperty(BaseUI.prototype, "signalTick", {
                get: function () {
                    return BaseUI._signalTick;
                },
                enumerable: true,
                configurable: true
            });
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
                //            if(baseUI._parent != this)
                //                baseUI._parent.signalAdded(baseUI, this);
                baseUI._parent = this;
                this._element.append(baseUI.element);
                baseUI.signalAdded.dispatch(baseUI, this);
                return baseUI;
            };
            BaseUI.prototype.remove = function () {
                this._element.remove();
                this.signalRemoved.dispatch(this, this._parent);
                this._parent = null;
            };
            BaseUI.prototype.dispose = function () {
                this.remove();
                this._element = null;
            };
            BaseUI._signalTick = new dd.core.Signal();
            return BaseUI;
        })();
        ui.BaseUI = BaseUI;
    })(ui = dd.ui || (dd.ui = {}));
})(dd || (dd = {}));
