module dd.ui {
    export class BaseUI {
        public static stage: Stage;

        private static _signalTick = new dd.core.Signal();
        public get signalTick(): dd.core.Signal {
            return BaseUI._signalTick;
        }

        //target:BaseUI, parent:BaseUI
        public signalAdded = new dd.core.Signal();

        //target:BaseUI, parent:BaseUI
        public signalRemoved = new dd.core.Signal();

        private _element: JQuery;
        private _parent: BaseUI = null;

        constructor() {
            this._element = $("<div></div>");
            this._element.addClass("dd-ui-base-ui");
        }

        public get parent(): BaseUI {
            return this._parent;
        }

        public get stage(): Stage {
            return BaseUI.stage;
        }

        public get element(): JQuery {
            return this._element;
        }

        public add(baseUI: BaseUI): BaseUI {
            baseUI._parent = this;
            this._element.append(baseUI.element);
            baseUI.signalAdded.dispatch(baseUI, this);
            return baseUI;
        }

        public remove(): void {
            this._element.remove();
            this.signalRemoved.dispatch(this, this._parent);
            this._parent = null;
        }

        public dispose(): void {
            this.remove();
            this._element = null;
        }
    }
}