module dd.ui.info {
    export class Notification extends dd.ui.info.BaseInfo {
        constructor(message: string) {
            super(message);
            this.element.text(message);
            this.element.addClass("dd-ui-info-notification");
            this.element.click((evt: any) => this.handleClick(evt));
        }

        private handleClick(evt: any): boolean {
            this.element.slideUp(300, function() { $(this).remove(); });
            evt.stopPropagation();
            return false;
        }
    }
}