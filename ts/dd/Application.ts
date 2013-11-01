declare var isDeviceReady:boolean;

module dd {
    export class Application {
        constructor() {
            if (isDeviceReady)
                document.addEventListener("deviceready", () => this.handleDeviceReady());
            else
                this.handleDeviceReady();
        }

        private handleDeviceReady(): void {
            if ($(".open-test-panel").length > 0)
                new dd.ui.panels.TestPanel();
        }
    }
}

$(window).ready(function(): void {
    new dd.Application();
});