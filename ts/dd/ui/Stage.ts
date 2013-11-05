module dd.ui {
    export class Stage extends BaseUI {

        private _stageWidth: number = 0;
        private _stageHeight: number = 0;
        private _container: JQuery;

        constructor(container: JQuery) {
            super();
            dd.ui.BaseUI.stage = this;
            this.element.addClass("dd-ui-stage");
            
            this._container = container;
            this._container.append(this.element);
            
            this.resize();
            $(window).bind("resize", () => this.resize());
            
            this.setupTick();
            
            this.tick();
        }

        private resize(): void {
            this._stageWidth = this.element.width();
            this._stageHeight = this.element.height();
        }

        public get stageWidth(): number {
            return this._stageWidth;
        }

        public get stageHeight(): number {
            return this._stageHeight;
        }
        
        public notify(message: string): dd.ui.info.Notification {
            var noti = new dd.ui.info.Notification(message);
            this.add(noti);
            return noti;
        }
        
        public toast(message: string): dd.ui.info.Toast {
            var tst = new dd.ui.info.Toast(message);
            this.add(tst);
            return tst;
        }
        
         //source: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
        private setupTick(): void {
            var lastTime = 0;
            var vendors = ['webkit', 'moz'];
            for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
                window.cancelAnimationFrame =
                  window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
            }

            if (!window.requestAnimationFrame)
                window.requestAnimationFrame = function (callback): number {
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id: number = window.setTimeout(function () { callback(currTime + timeToCall); },
                      timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };

            if (!window.cancelAnimationFrame)
                window.cancelAnimationFrame = function (id) {
                    clearTimeout(id);
                };
        }
        
        private tick(): void {
            window.requestAnimationFrame(() => this.tick());
            this.signalTick.dispatch();
        }
    }
}