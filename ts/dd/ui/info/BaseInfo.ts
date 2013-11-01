module dd.ui.info {
    export class BaseInfo extends dd.ui.BaseUI {
        private _message: string;
        constructor(message: string) {
            this._message = message;
            super();
        }

        public get message(): string {
            return this._message;
        }

        public set message(value: string) {
            this._message = value;
        }
    }
}