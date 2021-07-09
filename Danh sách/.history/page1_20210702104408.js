
$('.show-hide').on("click", function(e){ 
    $(this).find('.hide').css("display", "none");
    $(this).find('.show').css("display", "block");
    e.preventDefault();
})