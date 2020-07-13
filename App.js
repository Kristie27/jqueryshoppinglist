
$(document).ready(function (){
    /**
    * Add a new item
    */
    function onAdd(){
        let $ul, $li, $label, $div, value;
        value =$(".js-new-item").val();
        
        if(value === "") return;
        else alert("item: " + value);
        
        $ul = $("ul");
        $li = $("<li>").appendTo($ul);
        $div = $("<div>").addClass("checkbox").appendTo($li);
        $label = $("<label>").appendTo($div);
        
        $("<input>").attr("type", "checkbox")
        .addClass("item")
        .attr("name", "list")
        .click(toggleRemoved)
        .appendTo($label);
        
        $label.append(value);
        
        $(".js-new-item").val("");
    }
    
    /**
    *Mark or unmark item as complete
    */
    function toggleRemoved(Event){
        let $el;
        $el = $(Event.currentTarget);
        $el.closest("li").toggleClass("removed");
    }
    /**
    *Change Shopping List Name
    */
    
    function onChangeTitle(){
        $("h2").text($(".js-change-title").val());
    }
    
    /* Call our functions */
    
    $(".js-add").click(onAdd);
    $(".js-tem").click(toggleRemoved);
    $(".js-change-title").keyup(onChangeTitle);
});
