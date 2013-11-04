module dd.ui {

    export enum IconSize {
        small,
        medium,
        large
    }

    export class IconSource {
        public static LOGO = "logo";
        public static LOGO_SMALL = "logo-small";
        public static CONTROL_SETTINGS = "control-settings";
        public static INFO_TEXT = "info-text";
        public static DATE_TIME = "date-time";
        public static PRIVACY = "privacy";
        public static CONTACT_ADD = "contact-add";
        public static CONTACT_REMOVE = "contact-remove";
        public static CONTACT_TALK = "contact-talk";
        public static CHECK_ALL = "check-all";
        public static UNCHECK_ALL = "uncheck-all";
        public static CHECKMARK_DOUBLE = "checkmark-double";
        public static CROSS_DOUBLE = "cross-double";
        public static ZOOM_IN = "zoom-in";
        public static ZOOM_OUT = "zoom-out";
        public static ZOOM_DEFAULT = "zoom-default";
        public static DOWNLOAD = "download";
        public static RECYCLE = "recycle";
        public static CAPTURE_PHOTO = "capture-photo";
        public static CAPTURE_VIDEO = "capture-video";
        public static SOUND_OFF = "sound-off";
        public static SOUND_POWER_ONE = "sound-power-one";
        public static SOUND_POWER_TWO = "sound-power-two";
        public static SOUND_POWER_THREE = "sound-power-three";
        public static CROSS = "cross";
        public static CHECKMARK = "checkmark";
        public static CATURE_SOUND = "cature-sound";
        public static HOME = "home";
        public static WEATHER = "weather";
        public static MARKER = "marker";
        public static MEDIA_CONTROL_PLAY = "media-control-play";
        public static MEDIA_CONTROL_PAUSE = "media-control-pause";
        public static MEDIA_CONTROL_STOP = "media-control-stop";
        public static MEDIA_CONTROL_PLAY_BIG = "media-control-play-big";
        public static MEDIA_CONTROL_PAUSE_BIG = "media-control-pause-big";
        public static MEDIA_CONTROL_STOP_BIG = "media-control-stop-big";
        public static KEY = "key";
        public static BRAND_VISUAL_STUDIO = "brand-visual-studio";
        public static SOUND = "sound";
        public static BRAND_ANDROID = "brand-android";
        public static BRAND_APPLE = "brand-apple";
        public static BRAND_MICROSOFT = "brand-microsoft";
        public static TEXT = "text";
        public static WARNING = "warning";
        public static ORIENTATION = "orientation";
        public static COMPASS = "compass";
        public static CONTACTS = "contacts";
        public static FILE = "file";
        public static GEO_LOCATION = "geo-location";
        public static MEDIA = "media";
        public static NOTE = "note";
        public static NETWORK = "network";
        public static STORAGE = "storage";
        public static QR_CODE = "qr-code";
    }

    export class Icon extends BaseUI {

        private _source: string = null;
        private _size: IconSize = IconSize.medium;

        constructor(source: string = null) {
            super();
            this.element.addClass("dd-ui-icon");
            this.element.addClass(IconSize[this._size]);
            this.source = source;
        }

        public get size(): IconSize {
            return this._size;
        }

        public set size(value: IconSize) {
            if (this._size == value)
                return;

            this.element.removeClass(IconSize[this._size]);
            this._size = value;
            this.element.addClass(IconSize[this._size]);
        }

        public get source(): string {
            return this._source;
        }

        public set source(value: string) {
            if (this._source == value)
                return;
            if (this._source)
                this.element.removeClass(this._source);
            this._source = value;
            if (this._source)
                this.element.addClass(this._source);
        }
    }
}