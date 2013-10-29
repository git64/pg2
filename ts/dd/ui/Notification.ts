module dd.ui {
    export class Notification extends dd.ui.BaseUI {
        private _message: string;
        constructor(message: string) {
            this._message = message;
            super();
        }

        public create(): JQuery {
            var msg: JQuery = $("<div>" + this._message + "</div>");
            msg.addClass("notification");
            msg.click((evt: any) => this.handleClick(evt));
            return msg;
        }

        private handleClick(evt: any): void {
            this.element.slideUp(300, function() { $(this).remove(); });
        }
    }
}