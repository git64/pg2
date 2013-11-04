module dd.ui {

    export enum IconSize {
        small,
        medium,
        large
    }

    export class IconSource {
        public static CAPTURE_PHOTO = "capture-photo";
        public static CONTROL_SETTINGS = "control-settings";
    }

    export class Icon extends BaseUI {

        private _source: string = null;
        private _iconSize: IconSize = IconSize.medium;

        constructor(source: string = null) {
            super();
            this.element.addClass("dd-ui-icon");
            this.element.addClass(IconSize[this._iconSize]);
            this.source = source;
        }

        public get iconSize(): IconSize {
            return this._iconSize;
        }

        public set iconSize(value: IconSize) {
            if (this._iconSize == value)
                return;

            this.element.removeClass(IconSize[this._iconSize]);
            this._iconSize = value;
            this.element.addClass(IconSize[this._iconSize]);
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