
interface Window {
    isDeviceReady: boolean;
}

module dd {
    export class Application {

        constructor() {
            
            //this._stage = new dd.ui.Stage($("#application"));
            
            console.log("test");
            console.log(window.isDeviceReady);
            
            if (!window.isDeviceReady) {
                
                console.log("addEventListener");
                document.addEventListener("deviceready", () => this.handleDeviceReady());
                
            } else 
                this.handleDeviceReady();
        }

        private handleDeviceReady(): void {
        
            console.log("READY");
            
            $(".open-test-panel").append("<p>Test2</p>");
            
            
            /*
            if ($(".open-test-panel").length > 0)
                new dd.ui.panels.TestPanel();
            */
            
            
        }
    }
}

$(window).ready(function(): void {
    new dd.Application();
});