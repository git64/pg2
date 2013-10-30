var dd;
(function (dd) {
    var Application = (function () {
        function Application() {
            var _this = this;
            if (isDeviceReady)
                document.addEventListener("deviceready", function () {
                    return _this.handleDeviceReady();
                });
else
                this.handleDeviceReady();
        }
        Application.prototype.handleDeviceReady = function () {
            if ($("#test-panel").length > 0)
                new dd.panels.TestPanel();
        };
        return Application;
    })();
    dd.Application = Application;
})(dd || (dd = {}));

$(window).ready(function () {
    new dd.Application();
});
