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

$('.show-hide').on("click", function(){
    $(this).find('.show').toggle();
    $(this).find('.hide').toggle();
})
