module dd.ui.info {
    export class Toast extends dd.ui.info.BaseInfo {
        constructor(message: string) {
            super(message);
            this.element.addClass("dd-ui-info-toast");
        }

        public create(): JQuery {
            var msg: JQuery = $("<div>" + this.message + "</div>");
            msg.addClass("toast");
            msg.click((evt: any) => this.onClick(evt));
            return msg;
        }

        private onClick(evt: any): boolean {
            this.element.slideUp(300, function() { $(this).remove(); });
            evt.stopPropagation();
            return false;
        }
    }
}