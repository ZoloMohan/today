var taskscount = 0;
var taskCountIndicator = $("#task-count-indicator");

//add
$("#add-task-btn").click(function(){
    addtask();
});

$("#add-task-field").keypress(function(event){
    if(event.which === 13)
       addtask();
});

//complete
$("#task-list").on("click",".complete-task-btn", function(){
    $(this).parent().toggleClass("completed-task list-group-item-action");
    if($(this).parent().hasClass("completed-task")){
        reduceTaskCount(); 
        $(this).html("<span><i class=\"fas fa-check-circle\"></i></span>");
    }
    else{
        taskscount++;
        taskCountIndicator.html("<span id=\"task-count-indicator\">"+taskscount+"<span>");
        $(this).html("<span><i class=\"far fa-circle\"></i></span>");
    }
    checkComplete();
    event.stopPropagation();
});

//delete
$("#task-list").on("click", ".delete-task-btn", function(event){
    console.log(this);
    if(!$(this).parent().hasClass("completed-task"))
        reduceTaskCount();
    $(this).parent().remove();
    checkComplete();
    event.stopPropagation();
});

function addtask(){
    var newtask =  $("#add-task-field").val();
    if(newtask != ""){
        $("#add-task-field").val("");
        $("#task-list").append("<li class=\"task list-group-item list-group-item-action\"><span class=\"complete-task-btn\"><i class=\"far fa-circle\"></i></span></span>"+newtask+"<span class=\"task-action-btn copy-task-btn\"><i class=\"far fa-clone\"></i></span><span class=\"task-action-btn delete-task-btn\"><i class=\"far fa-trash-alt\"></i></span></li>");
        taskscount++;
        taskCountIndicator.html("<span id=\"task-count-indicator\">"+taskscount+"<span>");
        // taskCountIndicator.text(taskCount);
        checkComplete();
    }  
}

function checkComplete(){
    if(!taskscount == 0)
        $("#complete-msg").addClass("d-none");
    else
        $("#complete-msg").removeClass("d-none");
}

function reduceTaskCount(){
    if(taskscount>0){
        taskscount--;
        taskCountIndicator.html("<span id=\"task-count-indicator\">"+taskscount+"<span>");
    }
}

