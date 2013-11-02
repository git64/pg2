module dd.ui.panels {
    export class BasePanel extends dd.ui.BaseUI{
        constructor() {
            super();
            this.element.addClass("dd-ui-panels-base-panel");
            this.stage.add(this);
        }
    }
}