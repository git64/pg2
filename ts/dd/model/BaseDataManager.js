var dd;
(function (dd) {
    (function (model) {
        var BaseDataManager = (function () {
            function BaseDataManager() {
                var hello = $("<div>HELLO WORLD</div>");
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
});
