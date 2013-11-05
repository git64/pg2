
//SOURCE based on: https://developers.google.com/youtube/iframe_api_reference?hl=de-DE
module dd.ui.media {
    export class VideoPlayer extends dd.ui.BaseUI {

        private static ID: number = 0;
        private _id: string;

        private _done: boolean = false;
        private _player: YT.Player = null;
        private _container: JQuery;

        constructor() {
            super();
            this.element.addClass("dd-ui-media-video-player");
            this._id = "dd-ui-media-yt-player-" + VideoPlayer.ID++;
            this._container = $("<div id='" + this._id + "'></div>");
            this.element.append(this._container);
            
            this.element.css({left:"50px", top:"50px"});

            this.loadScript();
        }

        private loadScript(): void {

            //if the youtube library is already defined/loaded
            //just skip the loading process and create
            if (window["YT"]) {
                this.create();
                return;
            }

            var th = this;
            $.ajax({
                url: "https://www.youtube.com/iframe_api",
                dataType: "script",
                success: function(): void {
                    window.onYouTubeIframeAPIReady = function() {
                        th.create();
                    }
                }
            });
        }

        private create(): void {

            var options: YT.PlayerOptions = {};
            options.width = this.stage.stageWidth;
            options.height = 270;
            //            options.videoId = 'M7lc            
            var playerVars: YT.PlayerVars = {};
//            playerVars.showinfo = 0;
//            playerVars.controls = 0;
//            playerVars.showsearch = 0;
//            playerVars.rel = 0;
            options.playerVars = playerVars;

            var events: YT.Events = {};
            events.onReady = (e) => this.onPlayerReady(e);
            events.onStateChange = (e) => this.onPlayerStateChange(e);
            options.events = events;

            this._player = new YT.Player(this._id, options);
            
            this.element.click(() => this.onClick());
        }
        
        private onClick():void
            {
            this.play();
        }

        private onPlayerReady(e) {
            this._player.loadVideoById('M7lc1UVf-VE');
            this._container.focus();
            //this._player.playVideo();
        }

        private onPlayerStateChange(e) {
        console.log(e);
            this.stage.notify(e);
            if (e.data == YT.PlayerState.PLAYING && !this._done) {
                this._done = true;
                //this.play();
            }
        }

        public play() {
            this._player.playVideo();
        }
        
        public stop() {
            this._player.stopVideo();
        }

        public pause() {
            this._player.pauseVideo();
        }
    }
}
