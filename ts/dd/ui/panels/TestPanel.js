var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dd;
(function (dd) {
    (function (ui) {
        (function (panels) {
            var TestPanel = (function (_super) {
                __extends(TestPanel, _super);
                function TestPanel() {
                    var _this = this;
                    _super.call(this);
                    this.element.addClass("dd-ui-panels-test-panel");

                    $("body").click(function () {
                        return _this.takePicture();
                    });
                    //this.takePicture();
                }
                TestPanel.prototype.takePicture = function () {
                    var _this = this;
                    if (!navigator.camera) {
                        this.notify("No camera found on navigator");
                        return;
                    }

                    this.notify("Try to take a picture");
                    navigator.camera.getPicture(function (img) {
                        return _this.onSuccess(img);
                    }, function (msg) {
                        return _this.onFail(msg);
                    }, {
                        quality: 100,
                        targetWidth: 1024,
                        targetHeight: 768,
                        sourceType: navigator.camera.PictureSourceType.CAMERA,
                        destinationType: navigator.camera.DestinationType.FILE_URI,
                        encodingType: navigator.camera.EncodingType.JPEG,
                        saveToPhotoAlbum: false,
                        correctOrientation: false
                    });
                };

                TestPanel.prototype.onSuccess = function (imageData) {
                    var image = $('<img></img>');

                    //            image.attr("src", "data:image/jpeg;base64," + imageData);
                    image.attr("src", imageData);
                    this.element.append(image);
                    this.notify("take a picture success");
                };

                TestPanel.prototype.onFail = function (message) {
                    //alert("failed: " + message);
                    this.notify("take a picture failed");
                };
                return TestPanel;
            })(dd.ui.panels.BasePanel);
            panels.TestPanel = TestPanel;
        })(ui.panels || (ui.panels = {}));
        var panels = ui.panels;
    })(dd.ui || (dd.ui = {}));
    var ui = dd.ui;
})(dd || (dd = {}));
