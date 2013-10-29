module dd.ui {
    export class BaseUI {
        public element: JQuery;
        constructor() {
            this.element = this.create();
            if (!this.element) {
                console.log("If you extend the BaseUI implement the abstract create():JQuery method returning a valid object.");
                return;
            }
            this.element.addClass("base-ui");
        }

        public create(): JQuery {
            return null;
        }
    }
}