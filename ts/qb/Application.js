var dd;
(function (dd) {
    var Application = (function () {
        function Application() {
            //this._stage = new dd.ui.Stage($("#application"));
            var _this = this;
            console.log("test");
            console.log(window.isDeviceReady);
            if (!window.isDeviceReady) {
                console.log("addEventListener");
                document.addEventListener("deviceready", function () { return _this.handleDeviceReady(); });
            }
            else
                this.handleDeviceReady();
        }
        Application.prototype.handleDeviceReady = function () {
            console.log("READY");
            $(".open-test-panel").append("<div id='test' style='border:thin solid #EEAD0E;height: auto; position:absolute;width: 70%;margin: auto;'></div>");
            $("#test").append("<input type='text' list='browsers' style='width: 80%; top: 20%; margin:auto;'><datalist id='browsers'><option value='Internet Explorer'><option value='Firefox'></datalist>");
            $("#test").append("<div style='border:thin solid #EEAD0E; position:absolute; width: 70%;height: auto;top: 20%; right: 0px; bottom: 20%; left: 0px; margin: auto;text-align: center;'>stackoverflow</div>");
            $("#test").append("<div style='border:thin solid #EEAD0E; width:70%; margin:10px auto;'>Ngoverflow</div>");
            //$(".open-test-panel").append("<input type='text' list='browsers' style='position: absolute; width: 70%; top: 20%; margin:auto;'><datalist id='browsers'><option value='Internet Explorer'><option value='Firefox'></datalist>");
            //$(".open-test-panel").append("<input type='text' list='browsers' style='position: absolute; width: 70%; top: 60%; margin:auto;'><datalist id='browsers'><option value='Internet Explorer'><option value='Firefox'></datalist>");
            /*
            if ($(".open-test-panel").length > 0)
                new dd.ui.panels.TestPanel();
            */
        };
        return Application;
    })();
    dd.Application = Application;
})(dd || (dd = {}));
$(window).ready(function () {
    new dd.Application();
});
