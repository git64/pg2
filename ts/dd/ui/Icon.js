var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dd;
(function (dd) {
    (function (ui) {
        (function (IconSize) {
            IconSize[IconSize["small"] = 0] = "small";
            IconSize[IconSize["medium"] = 1] = "medium";
            IconSize[IconSize["large"] = 2] = "large";
        })(ui.IconSize || (ui.IconSize = {}));
        var IconSize = ui.IconSize;

        var IconSource = (function () {
            function IconSource() {
            }
            IconSource.CAPTURE_PHOTO = "capture-photo";
            IconSource.CONTROL_SETTINGS = "control-settings";
            return IconSource;
        })();
        ui.IconSource = IconSource;

        var Icon = (function (_super) {
            __extends(Icon, _super);
            function Icon(source) {
                if (typeof source === "undefined") { source = null; }
                _super.call(this);
                this._source = null;
                this._iconSize = IconSize.medium;
                this.element.addClass("dd-ui-icon");
                this.element.addClass(IconSize[this._iconSize]);
                this.source = source;
            }
            Object.defineProperty(Icon.prototype, "iconSize", {
                get: function () {
                    return this._iconSize;
                },
                set: function (value) {
                    if (this._iconSize == value)
                        return;

                    this.element.removeClass(IconSize[this._iconSize]);
                    this._iconSize = value;
                    this.element.addClass(IconSize[this._iconSize]);
                },
                enumerable: true,
                configurable: true
            });


            Object.defineProperty(Icon.prototype, "source", {
                get: function () {
                    return this._source;
                },
                set: function (value) {
                    if (this._source == value)
                        return;
                    if (this._source)
                        this.element.removeClass(this._source);
                    this._source = value;
                    if (this._source)
                        this.element.addClass(this._source);
                },
                enumerable: true,
                configurable: true
            });

            return Icon;
        })(ui.BaseUI);
        ui.Icon = Icon;
    })(dd.ui || (dd.ui = {}));
    var ui = dd.ui;
})(dd || (dd = {}));
