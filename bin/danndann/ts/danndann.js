var dd;
(function (dd) {
    (function (model) {
        var BaseDataManager = (function () {
            function BaseDataManager() {
                var hello = $("<div id='tButton' style='height:200px;width:100%;background-color:#E0E0E0;'>HELLO WORLD</div>");
                $("body").append(hello);

                $("#tButton").click(function () {
                    $(this).hide(5);
                });
            }
            BaseDataManager.prototype.load = function (ressourceURL) {
            };
            return BaseDataManager;
        })();
        model.BaseDataManager = BaseDataManager;
    })(dd.model || (dd.model = {}));
    var model = dd.model;
})(dd || (dd = {}));

$(window).ready(function () {
    new dd.model.BaseDataManager();
});
var dd;
(function (dd) {
    (function (display) {
        var BasePanel = (function () {
            function BasePanel() {
                console.log("TEST");
            }
            return BasePanel;
        })();
        display.BasePanel = BasePanel;
    })(dd.display || (dd.display = {}));
    var display = dd.display;
})(dd || (dd = {}));
