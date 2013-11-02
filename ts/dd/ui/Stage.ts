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
            this.refreshSize();
            $(window).bind("resize", () => this.refreshSize());
        }

        private refreshSize(): void {
            this._stageWidth = this.element.width();
            this._stageHeight = this.element.height();
        }

        public get stageWidth(): number {
            return this._stageWidth;
        }

        public get stageHeight(): number {
            return this._stageHeight;
        }
    }
}