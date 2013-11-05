
//SOURCE based on: https://developers.google.com/youtube/iframe_api_reference?hl=de-DE
module dd.ui.media {
    export class VideoPlayer extends dd.ui.media.BaseMedia {

        private _container: JQuery;

        constructor() {
            super();
            this.element.addClass("dd-ui-media-video-player");
            
            this._container = $("<div></div>");
            this.element.append(this._container);
        }
        
        private onClick():void
            {
            this.play();
        }

        public play() {
            
        }
        
        public stop() {
            
        }

        public pause() {
            
        }
    }
}
