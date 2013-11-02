module dd.ui.panels {
    export class BasePanel extends dd.ui.BaseUI{
        constructor() {
            super();
            this.element.addClass("dd-ui-panels-base-panel");
            this.stage.add(this);
        }

        public notify(message: string): dd.ui.info.Notification {
            var noti = new dd.ui.info.Notification(message);
            this.stage.add(noti);
            return noti;
        }
        
        public toast(message: string): dd.ui.info.Toast {
            var tst = new dd.ui.info.Toast(message);
            this.stage.add(tst);
            return tst;
        }
    }
}