module dd.ui.panels {
    export class BasePanel extends dd.ui.BaseUI{
        constructor() {
            super();
            this.element.addClass("dd-ui-panels-base-panel");
            
            $("#application").append(this.element);
        }

        public notify(message: string): dd.ui.info.Notification {
            var noti = new dd.ui.info.Notification(message);
            this.element.append(noti.element);
            return noti;
        }
    }
}