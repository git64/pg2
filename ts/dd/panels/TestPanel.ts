module dd.panels {
    export class TestPanel extends dd.panels.BasePanel {
        constructor() {
            super();

            this.notify("take a picture");
            this.takePicture();
        }

        public takePicture(): void {
            if (!navigator.camera) {
                this.notify("No camera found on navigator");
                return;
            }
            navigator.camera.getPicture(
                (img: any) => this.onSuccess(img),
                (msg: string) => this.onFail(msg),
                {
                    quality: 50,
                    destinationType: 0//Camera.DestinationType.DATA_URL
                });
        }

        public create(): JQuery {
            return $("#test-panel");
        }

        private onSuccess(imageData) {
            var image = $('<img></img>');
            image.attr("src", "data:image/jpeg;base64," + imageData);
            this.element.append(image);
            this.notify("take a picture success");
        }

        private onFail(message) {
            //alert("failed: " + message);
            this.notify("take a picture failed");
        }

    }
}