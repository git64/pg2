var dd;
(function (dd) {
    var model;
    (function (model) {
        var BaseDataManager = (function () {
            function BaseDataManager() {
            }
            BaseDataManager.prototype.load = function (ressourceURL) {
            };
            return BaseDataManager;
        })();
        model.BaseDataManager = BaseDataManager;
    })(model = dd.model || (dd.model = {}));
})(dd || (dd = {}));
