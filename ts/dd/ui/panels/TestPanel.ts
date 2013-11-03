module dd.ui.panels {
    export class TestPanel extends dd.ui.panels.BasePanel {
        constructor() {
            super();
            this.element.addClass("dd-ui-panels-test-panel");

            if (navigator.splashscreen) {
                try {

                    navigator.splashscreen.show();
                } catch (e) {
                    this.stage.notify("Error creating splash screen" + e);
                }
            }
            else
                this.stage.notify("No splashscreen property defined on navigator");

            this.element.click(() => this.takePicture());
            //this.takePicture();
        }

        public takePicture(): void {
            if (!navigator.camera) {
                this.stage.notify("No camera found on navigator");
                return;
            }

            this.stage.notify("Try to take a picture");
            navigator.camera.getPicture(
                (img: any) => this.onSuccess(img),
                (msg: string) => this.onFail(msg),
                {
                    quality: 20,
                    targetWidth: 1024,
                    targetHeight: 768,
                    sourceType: navigator.camera.PictureSourceType.CAMERA,
                    destinationType: navigator.camera.DestinationType.FILE_URI,
                    encodingType: navigator.camera.EncodingType.JPEG,
                    saveToPhotoAlbum: false,
                    correctOrientation: true
                });
        }

        private onSuccess(imageData) {
            var image = $('<img></img>');
            //            image.attr("src", "data:image/jpeg;base64," + imageData);
            image.attr("src", imageData);
            this.element.append(image);
            this.stage.notify("take a picture success");
        }

        private onFail(message) {
            //alert("failed: " + message);
            this.stage.notify("take a picture failed");
        }

    }
}