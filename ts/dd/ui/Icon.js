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
            IconSource.LOGO = "logo";
            IconSource.LOGO_SMALL = "logo-small";
            IconSource.CONTROL_SETTINGS = "control-settings";
            IconSource.INFO_TEXT = "info-text";
            IconSource.DATE_TIME = "date-time";
            IconSource.PRIVACY = "privacy";
            IconSource.CONTACT_ADD = "contact-add";
            IconSource.CONTACT_REMOVE = "contact-remove";
            IconSource.CONTACT_TALK = "contact-talk";
            IconSource.CHECK_ALL = "check-all";
            IconSource.UNCHECK_ALL = "uncheck-all";
            IconSource.CHECKMARK_DOUBLE = "checkmark-double";
            IconSource.CROSS_DOUBLE = "cross-double";
            IconSource.ZOOM_IN = "zoom-in";
            IconSource.ZOOM_OUT = "zoom-out";
            IconSource.ZOOM_DEFAULT = "zoom-default";
            IconSource.DOWNLOAD = "download";
            IconSource.RECYCLE = "recycle";
            IconSource.CAPTURE_PHOTO = "capture-photo";
            IconSource.CAPTURE_VIDEO = "capture-video";
            IconSource.SOUND_OFF = "sound-off";
            IconSource.SOUND_POWER_ONE = "sound-power-one";
            IconSource.SOUND_POWER_TWO = "sound-power-two";
            IconSource.SOUND_POWER_THREE = "sound-power-three";
            IconSource.CROSS = "cross";
            IconSource.CHECKMARK = "checkmark";
            IconSource.CATURE_SOUND = "cature-sound";
            IconSource.HOME = "home";
            IconSource.WEATHER = "weather";
            IconSource.MARKER = "marker";
            IconSource.MEDIA_CONTROL_PLAY = "media-control-play";
            IconSource.MEDIA_CONTROL_PAUSE = "media-control-pause";
            IconSource.MEDIA_CONTROL_STOP = "media-control-stop";
            IconSource.MEDIA_CONTROL_PLAY_BIG = "media-control-play-big";
            IconSource.MEDIA_CONTROL_PAUSE_BIG = "media-control-pause-big";
            IconSource.MEDIA_CONTROL_STOP_BIG = "media-control-stop-big";
            IconSource.KEY = "key";
            IconSource.BRAND_VISUAL_STUDIO = "brand-visual-studio";
            IconSource.SOUND = "sound";
            IconSource.BRAND_ANDROID = "brand-android";
            IconSource.BRAND_APPLE = "brand-apple";
            IconSource.BRAND_MICROSOFT = "brand-microsoft";
            IconSource.TEXT = "text";
            IconSource.WARNING = "warning";
            IconSource.ORIENTATION = "orientation";
            IconSource.COMPASS = "compass";
            IconSource.CONTACTS = "contacts";
            IconSource.FILE = "file";
            IconSource.GEO_LOCATION = "geo-location";
            IconSource.MEDIA = "media";
            IconSource.NOTE = "note";
            IconSource.NETWORK = "network";
            IconSource.STORAGE = "storage";
            IconSource.QR_CODE = "qr-code";
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
