var dd;
(function (dd) {
    (function (model) {
        var BaseDataManager = (function () {
            function BaseDataManager() {
                var hello = $("<div id='tButton' style='height:200px;width:100%;background-color:#E0E0E0;'>HELLO WORLD</div>");

                $("body").append(hello);
            }
            return BaseDataManager;
        })();
        model.BaseDataManager = BaseDataManager;
    })(dd.model || (dd.model = {}));
    var model = dd.model;
})(dd || (dd = {}));

$(window).ready(function () {
    new dd.model.BaseDataManager();

    $("#tButton").click(function () {
        $("#tButton").hide();
    });
});
