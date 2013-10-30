module dd.panels {
    export class TestPanel extends dd.panels.BasePanel {
        constructor() {
            super();

            $("body").click(() => this.takePicture());
            //this.takePicture();
        }

        public takePicture(): void {
            if (!navigator.camera) {
                this.notify("No camera found on navigator");
                return;
            }
            
            this.notify("Try to take a picture");
            navigator.camera.getPicture(
                (img: any) => this.onSuccess(img),
                (msg: string) => this.onFail(msg),
                {
                    quality: 30,
                    targetWidth: 600,
                    targetHeight: 600,
                    sourceType : 1,//Camera.PictureSourceType.CAMERA, 
                    destinationType: 1,//Camera.DestinationType.DATA_URL:0, Camera.DestinationType.FILE_URI:1
                    saveToPhotoAlbum: false
                });
        }

        public create(): JQuery {
            return $("#test-panel");
        }

        private onSuccess(imageData) {
//            var image = $('<img></img>');
//            image.attr("src", "data:image/jpeg;base64," + imageData);
//            this.element.append(image);
            this.notify("take a picture success");
        }

        private onFail(message) {
            //alert("failed: " + message);
            this.notify("take a picture failed");
        }

    }
}