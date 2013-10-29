module dd.panels {
    export class BasePanel extends dd.ui.BaseUI{
        constructor() {
            super();
        }

        public notify(message: string): dd.ui.Notification {
            var noti = new dd.ui.Notification(message);
            this.element.append(noti.element);
            return noti;
        }
    }
}