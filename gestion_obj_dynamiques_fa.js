$(function(){
    $.each(_userdata, function(key, value){
        $(".js-" + key).html(value);
    });
    $(".js-username").each(function(){
        if ($(this).html() == "Anonymous") {
          $(this).html("Aventurier sans nom");
        }
    });
});