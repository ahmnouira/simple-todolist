$(document).ready(() => {                                          // wait for the HTML document to fully loaded and ready

var tasks = 0;                                                     // stores the nomber of tasks in the list 
$("#removeAll").hide();                                            // initialy hide the removeAll button 

/* add task new task hander */
$("#add").on("click", (event) => {                                  // add listner to 'click' event
    event.preventDefault();                                         // prevent the default action of the event 
    event.stopPropagation();                                        // stop the event from the building up the other elements
    var val = $("input").val();                                    // get the value from the input
    if (val !=="") {                                               // check if the input value is not empty
        tasks += 1;                                                // add 1 to the counter
        var elem = $("<li class='list-group-item'>").text(val);     // prepare the elment to diplay for a new task
        $(elem).append("<div class='text-right'><button class='btn btn-danger'> X </button></div></li>"); 
        $("#mylist").append(elem);                                  // append the new task element to mylist element 
        $("input").val("");                                         // clear the input
       
        /* remove unique task hander */
        $(".text-right").on("click", function(event) {
            event.preventDefault();
            event.stopPropagation()
            tasks -= 1; 
            $(this).parent().remove();            
        });
        /* show removeAll button when we have more than 3 tasks */
        if(tasks > 2)  {
            $("#removeAll").show();
        }
        /* removeAll hander */
        $("#removeAll").on("click", (event) => {
            event.preventDefault(); 
            event.stopPropagation();
            $(".disabled").siblings().remove();
            tasks = 0; 
            $("#removeAll").hide();
        });
    }
});
}); 