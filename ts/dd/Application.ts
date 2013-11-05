//declare var isDeviceReady: boolean;
interface Window {
    isDeviceReady: boolean;
}

module dd {
    export class Application {
        private _stage: dd.ui.Stage;

        constructor() {
            this._stage = new dd.ui.Stage($("#application"));
            console.log(window.isDeviceReady);
            if (!window.isDeviceReady)
                document.addEventListener("deviceready", () => this.handleDeviceReady());
            else
                this.handleDeviceReady();
        }

        private handleDeviceReady(): void {
        console.log("READY");
            if ($(".open-test-panel").length > 0)
                new dd.ui.panels.TestPanel();
        }
    }
}

$(window).ready(function(): void {
    new dd.Application();
});