//declare var isDeviceReady: boolean;
interface Window {
    isDeviceReady: boolean;
}

module dd {
    export class Application {
        private _stage: dd.ui.Stage;

        constructor() {
            this._stage = new dd.ui.Stage($("#application"));
            if (!window.isDeviceReady)
                document.addEventListener("deviceready", () => this.handleDeviceReady());
            else
                this.handleDeviceReady();
        }

        private handleDeviceReady(): void {
            if ($(".open-test-panel").length > 0)
                new dd.ui.panels.TestPanel();
                
            navigator.splashscreen.hide();
        }
    }
}

$(window).ready(function(): void {
    new dd.Application();
});