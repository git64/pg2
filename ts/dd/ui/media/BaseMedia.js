var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dd;
(function (dd) {
    (function (ui) {
        (function (media) {
            var BaseMedia = (function (_super) {
                __extends(BaseMedia, _super);
                function BaseMedia() {
                    _super.call(this);
                    this.element.addClass("dd-ui-media-base-media");
                }
                return BaseMedia;
            })(dd.ui.BaseUI);
            media.BaseMedia = BaseMedia;
        })(ui.media || (ui.media = {}));
        var media = ui.media;
    })(dd.ui || (dd.ui = {}));
    var ui = dd.ui;
})(dd || (dd = {}));
