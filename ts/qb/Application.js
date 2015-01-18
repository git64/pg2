// TEST
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
            $(".open-test-panel").append("<p>Test2</p>");
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
