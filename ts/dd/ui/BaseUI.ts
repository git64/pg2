module dd.ui {
    export class BaseUI {
        public element: JQuery;
        constructor() {
            this.element = $("<div><div>");
            this.element.addClass("dd-ui-base-ui");
        }
    }
}