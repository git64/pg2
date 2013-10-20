module dd.model {
    export class BaseDataManager {
        constructor() {

            var hello = $("<div id='tButton' style='height:200px;width:100%;background-color:#E0E0E0;'>HELLO WORLD</div>");

            $("body").append(hello);

        }
    }
}

$(window).ready(function(): void {
    new dd.model.BaseDataManager();


    $("#tButton").click(function() {
        $("#tButton").hide();
    });


});