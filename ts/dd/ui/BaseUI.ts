module dd.ui {
    export class BaseUI {
        public static stage:Stage;
        
        private _element: JQuery;
        private _parent:BaseUI = null;
        
        constructor() {
            this._element = $("<div><div>");
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
            return baseUI;
        }

        public remove(): void {
            this._element.remove();
            this._parent = null;
        }
        
        public dispose(): void {
            this.remove();
            this._element = null;
        }
    }
}