module dd.model {
    export class BaseDataManager {
        constructor() {
            var hello = $("<div>HELLO WORLD</div>");
            $("body").append(hello);
        }
    }
}

$(window).ready(function(): void {
    new dd.model.BaseDataManager();
});