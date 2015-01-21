
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
            
            $(".open-test-panel").append("<input type='text' list='browsers' style='width:70%; margin:10px auto;'><datalist id='browsers'><option value='Internet Explorer'><option value='Firefox'></datalist>");
            
            
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