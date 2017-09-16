$(document).ready(function(){
    
    $(".eng-lang").click(function(){
        $(".japanese").hide();
        $(".english").show();
    });
    
    $(".jpn-lang").click(function(){
        $(".english").hide();
        $(".japanese").show();
    });
});