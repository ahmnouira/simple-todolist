// check counter for add and removes tasks


$(document).ready(function(){

var tasks = 0;
var createClearAll = false;

$("#remove").hide();

$("#add").on("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    // event handler
    var val = $("input").val();
    if (val !=="") {
        tasks++;
        console.log(tasks);
        var elem = $("<li class='list-group-item'></li>").text(val);
        $(elem).append("<div class='text-right'><button class='btn btn-danger'> X </button></div>");
        $("#mylist").append(elem);
        $("input").val(""); // clear the input
        $(".text-right").on("click", function(event){
            event.stopPropagation();
            event.preventDefault();
            tasks--;
            console.log(tasks);
            $(this).parent().remove();
        });

        

        if(tasks > 2 && !createClearAll) {
            createClearAll = true;
            $("#remove").show();
        }
        if(createClearAll == true) {
            $("#remove").on("click", function(event){
                event.preventDefault();
                event.stopPropagation();
                $(".disbaled").siblings().remove();
            });
        
        }
      
    }
});



});

