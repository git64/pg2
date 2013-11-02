module dd.ui.info {
    export class Notification extends dd.ui.info.BaseInfo {
        constructor(message: string) {
            super(message);
            this.element.text(message);
            this.element.addClass("dd-ui-info-notification");
            this.element.bind("click.notification", (evt: any) => this.handleClick(evt));
        }

        private handleClick(evt: any): boolean {
            this.element.slideUp(300, () => this.dispose());
            evt.stopPropagation();
            return false;
        }

        public dispose(): void {
            this.element.unbind("click.notification");
            super.dispose();
        }
    }
}