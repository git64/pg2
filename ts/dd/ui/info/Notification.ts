module dd.ui.info {
    export class Notification extends dd.ui.info.BaseInfo {
        constructor(message: string) {
            super(message);
            this.element.text(message);
            this.element.addClass("dd-ui-info-notification");
            this.element.bind("click.notification", (evt: any) => this.handleClick(evt));
            this.signalAdded.add(this.onAdded, this);
            this.signalTick.once(this.onTick, this);
        }

        private onTick(): void {
            console.log("TICK");
        }

        private onAdded(target: dd.ui.BaseUI, parent: dd.ui.BaseUI): void {
            console.log("ADDED");
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