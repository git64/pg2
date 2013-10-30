var dd;
(function (dd) {
    var Application = (function () {
        function Application() {
            var _this = this;
            //            if (!navigator.device)
            //                document.addEventListener("deviceready", () => this.handleDeviceReady());
            //            else
            //                this.handleDeviceReady();
            setTimeout(function () {
                return _this.handleDeviceReady();
            }, 10000);
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
