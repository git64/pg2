
// TEST
var dd;
(function (dd) {
    var Application = (function () {
        function Application() {
            var _this = this;
            this._stage = new dd.ui.Stage($("#application"));
            console.log("test");
            console.log(window.isDeviceReady);
            if (!window.isDeviceReady)
                document.addEventListener("deviceready", function () {
                    return _this.handleDeviceReady();
                });
            else
                this.handleDeviceReady();
        }
        Application.prototype.handleDeviceReady = function () {
            console.log("READY");
            if ($(".open-test-panel").length > 0)
                new dd.ui.panels.TestPanel();
        };
        return Application;
    })();
    dd.Application = Application;
})(dd || (dd = {}));

$(window).ready(function () {
    new dd.Application();
});
