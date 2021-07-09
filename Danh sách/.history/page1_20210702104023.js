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
    $(this).find('.hide').css("display", "none");
    $(this).find('.show').css("display", "block");
    e.preventDefault();
})