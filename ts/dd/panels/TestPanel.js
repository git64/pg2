var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dd;
(function (dd) {
    (function (panels) {
        var TestPanel = (function (_super) {
            __extends(TestPanel, _super);
            function TestPanel() {
                _super.call(this);

                this.notify("take a picture");
                this.takePicture();
            }
            TestPanel.prototype.takePicture = function () {
                var _this = this;
                navigator.camera.getPicture(function (img) {
                    return _this.onSuccess(img);
                }, function (msg) {
                    return _this.onFail(msg);
                }, {
                    quality: 50,
                    destinationType: 0
                });
            };

            TestPanel.prototype.create = function () {
                return $("#test-panel");
            };

            TestPanel.prototype.onSuccess = function (imageData) {
                var image = $('<img></img>');
                image.attr("src", "data:image/jpeg;base64," + imageData);
                this.element.append(image);
            };

            TestPanel.prototype.onFail = function (message) {
                alert("failed: " + message);
            };
            return TestPanel;
        })(dd.panels.BasePanel);
        panels.TestPanel = TestPanel;
    })(dd.panels || (dd.panels = {}));
    var panels = dd.panels;
})(dd || (dd = {}));
