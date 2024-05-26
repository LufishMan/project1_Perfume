// $(document).ready(function(){
//     alert('test');
//     })

// $(document).ready(function(){
//     $('.showmenu').on('click', function (e) { 
//         e.preventDefault();
//         $('nav').toggleClass('menu-show');
//     })
// })


// DOM選到漢堡鈕、漢堡條
const hamburger = document.querySelector(".hamburger");
const navItem = document.querySelector(".navItem");

// 用event點擊事件觸發
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navItem.classList.toggle("active");
})