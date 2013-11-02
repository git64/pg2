module dd.ui.panels {
    export class TestPanel extends dd.ui.panels.BasePanel {
        constructor() {
            super();
            this.element.addClass("dd-ui-panels-test-panel");

            $("body").click(() => this.takePicture());
            //this.takePicture();
        }

        public takePicture(): void {
        
            this.notify("No camera found on navigator");
            return;
            
            if (!navigator.camera) {
                this.notify("No camera found on navigator");
                return;
            }

            this.notify("Try to take a picture");
            navigator.camera.getPicture(
                (img: any) => this.onSuccess(img),
                (msg: string) => this.onFail(msg),
                {
                    quality: 50,
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
            this.notify("take a picture success");
        }

        private onFail(message) {
            //alert("failed: " + message);
            this.notify("take a picture failed");
        }

    }
}