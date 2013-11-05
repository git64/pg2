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

                    //            if (navigator.splashscreen) {
                    //                try {
                    //
                    //                    navigator.splashscreen.show();
                    //                } catch (e) {
                    //                    this.stage.notify("Error creating splash screen" + e);
                    //                }
                    //            }
                    //            else
                    //                this.stage.notify("No splashscreen property defined on navigator");
                    this.element.click(function () {
                        return _this.takePicture();
                    });
                    //            this.testVideoPlayer();
                    //            this.testIcons();
                }
                TestPanel.prototype.testVideoPlayer = function () {
                    var vp = new dd.ui.media.VideoPlayer();
                    this.add(vp);
                };

                TestPanel.prototype.testIcons = function () {
                    for (var s in dd.ui.IconSource) {
                        var src = dd.ui.IconSource[s];

                        var ic = new dd.ui.Icon(src);
                        ic.size = dd.ui.IconSize.large;
                        this.add(ic);

                        var ic = new dd.ui.Icon(src);
                        ic.size = dd.ui.IconSize.medium;
                        this.add(ic);

                        var ic = new dd.ui.Icon(src);
                        ic.size = dd.ui.IconSize.small;
                        this.add(ic);

                        this.element.append("<br />");
                    }
                };

                TestPanel.prototype.takePicture = function () {
                    var _this = this;
                    if (!navigator.camera) {
                        this.stage.notify("No camera found on navigator");
                        return;
                    }

                    this.stage.notify("Try to take a picture");
                    navigator.camera.getPicture(function (img) {
                        return _this.onSuccess(img);
                    }, function (msg) {
                        return _this.onFail(msg);
                    }, {
                        quality: 20,
                        targetWidth: 1024,
                        targetHeight: 768,
                        sourceType: navigator.camera.PictureSourceType.CAMERA,
                        destinationType: navigator.camera.DestinationType.FILE_URI,
                        encodingType: navigator.camera.EncodingType.JPEG,
                        saveToPhotoAlbum: false,
                        correctOrientation: true
                    });
                };

                TestPanel.prototype.onSuccess = function (imageData) {
                    var image = $('<img></img>');

                    //            image.attr("src", "data:image/jpeg;base64," + imageData);
                    image.attr("src", imageData);
                    this.element.append(image);
                    this.stage.notify("take a picture success");
                };

                TestPanel.prototype.onFail = function (message) {
                    //alert("failed: " + message);
                    this.stage.notify("take a picture failed");
                };
                return TestPanel;
            })(dd.ui.panels.BasePanel);
            panels.TestPanel = TestPanel;
        })(ui.panels || (ui.panels = {}));
        var panels = ui.panels;
    })(dd.ui || (dd.ui = {}));
    var ui = dd.ui;
})(dd || (dd = {}));
