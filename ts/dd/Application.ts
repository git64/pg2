module dd {
    export class Application {
        constructor() {
//            if (!navigator.device)
//                document.addEventListener("deviceready", () => this.handleDeviceReady());
//            else
//                this.handleDeviceReady();
            setTimeout(() => this.handleDeviceReady(), 5000);
        }

        private handleDeviceReady(): void {
            if ($("#test-panel").length > 0)
                new dd.panels.TestPanel();
        }
    }
}

$(window).ready(function(): void {
    new dd.Application();
});