// let hide = document.querySelectorAll(".hide");
// let show = document.querySelectorAll(".show");
// function ClickShow() {
//     for (let i = 0; i < hide.length; i++) {
//         hide[i].onclick = function(e){
//             e.preventDefault();
//             hide[i].style.display = "none";
//             show[i].style.display = "block";  
//         }
//     }
// }

// ClickShow();

$('a').on("click", function(e){
    e.de
    $(this).find('.icon-1').toggle();
    $(this).find('.icon-2').toggle();
    $(this).parent('.filter-option').find('.item__male').toggle();
    if ($(this).hasClass('actived')) {
        $(this).removeClass('actived').addClass('not-actived');
    } else {
        $(this).removeClass('not-actived').addClass('actived');
    }
})