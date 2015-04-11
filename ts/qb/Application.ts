
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
            
            
            //#$(".open-test-panel").append("<div id='test' style='border:thin solid #EEAD0E;height: auto; position:absolute;width: 70%;margin: auto;'></div>");
            
           // $(".open-test-panel").append("<div id='test2' style='border:thin solid #EEAD0E; position:absolute; width: 70%;height: auto;top: 20%; right: 0px; bottom: 20%; left: 0px; margin: auto;text-align: center;'>stackoverflow</div>");
            
            $(".open-test-panel").append("<input type='text' list='browsers' style='width: 80%; top: 20%; margin:auto;'><datalist id='browsers'><option value='Internet Explorer'><option value='Firefox'></datalist>")
            
            //$("#test").append("<div style='border:thin solid #EEAD0E; width:70%; margin:10px auto;'>Ngoverflow</div>");
            
            //$(".open-test-panel").append("<input type='text' list='browsers' style='position: absolute; width: 70%; top: 20%; margin:auto;'><datalist id='browsers'><option value='Internet Explorer'><option value='Firefox'></datalist>");
            //$(".open-test-panel").append("<input type='text' list='browsers' style='position: absolute; width: 70%; top: 60%; margin:auto;'><datalist id='browsers'><option value='Internet Explorer'><option value='Firefox'></datalist>");
            
            
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