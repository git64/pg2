var dd;
(function (dd) {
    (function (model) {
        var BaseDataManager = (function () {
            function BaseDataManager() {
            }
            BaseDataManager.prototype.load = function (ressourceURL) {
            };
            return BaseDataManager;
        })();
        model.BaseDataManager = BaseDataManager;
    })(dd.model || (dd.model = {}));
    var model = dd.model;
})(dd || (dd = {}));
