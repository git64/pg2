var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dd;
(function (dd) {
    (function (ui) {
        //SOURCE based on: https://developers.google.com/youtube/iframe_api_reference?hl=de-DE
        (function (media) {
            var YouTubePlayer = (function (_super) {
                __extends(YouTubePlayer, _super);
                function YouTubePlayer() {
                    _super.call(this);
                    this._done = false;
                    this._player = null;
                    this.element.addClass("dd-ui-media-youtube-player");
                    this._id = "dd-ui-media-youtube-player-" + YouTubePlayer.ID++;
                    this._container = $("<div id='" + this._id + "'></div>");
                    this.element.append(this._container);

                    this.element.css({ left: "50px", top: "50px" });

                    this.loadScript();
                }
                YouTubePlayer.prototype.loadScript = function () {
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
                        success: function () {
                            window.onYouTubeIframeAPIReady = function () {
                                th.create();
                            };
                        }
                    });
                };

                YouTubePlayer.prototype.create = function () {
                    var _this = this;
                    var options = {};
                    options.width = this.stage.stageWidth;
                    options.height = 270;

                    //            options.videoId = 'M7lc
                    var playerVars = {};

                    //            playerVars.showinfo = 0;
                    //            playerVars.controls = 0;
                    //            playerVars.showsearch = 0;
                    //            playerVars.rel = 0;
                    options.playerVars = playerVars;

                    var events = {};
                    events.onReady = function (e) {
                        return _this.onPlayerReady(e);
                    };
                    events.onStateChange = function (e) {
                        return _this.onPlayerStateChange(e);
                    };
                    options.events = events;

                    this._player = new YT.Player(this._id, options);

                    this.element.click(function () {
                        return _this.onClick();
                    });
                };

                YouTubePlayer.prototype.onClick = function () {
                    this.play();
                };

                YouTubePlayer.prototype.onPlayerReady = function (e) {
                    this._player.loadVideoById('M7lc1UVf-VE');
                    this._container.focus();
                    //this._player.playVideo();
                };

                YouTubePlayer.prototype.onPlayerStateChange = function (e) {
                    console.log(e);
                    this.stage.notify(e);
                    if (e.data == YT.PlayerState.PLAYING && !this._done) {
                        this._done = true;
                        //this.play();
                    }
                };

                YouTubePlayer.prototype.play = function () {
                    this._player.playVideo();
                };

                YouTubePlayer.prototype.stop = function () {
                    this._player.stopVideo();
                };

                YouTubePlayer.prototype.pause = function () {
                    this._player.pauseVideo();
                };
                YouTubePlayer.ID = 0;
                return YouTubePlayer;
            })(dd.ui.BaseUI);
            media.YouTubePlayer = YouTubePlayer;
        })(ui.media || (ui.media = {}));
        var media = ui.media;
    })(dd.ui || (dd.ui = {}));
    var ui = dd.ui;
})(dd || (dd = {}));
