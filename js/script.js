// Global variables
let logo_header = document.getElementById("logo-head");
let ham_btn = document.getElementById("ham-btn");
let mob_menu = document.getElementById("mobile-menu");
let isopen = false; 
let main_h = document.getElementById("main-h");
let service_arr = document.getElementsByClassName("service");
let description_arr = document.getElementsByClassName("description");
let service_text = document.getElementsByClassName("service-text");
let service_phrase = 
[
  "Piecing together bespoken web applications that are intuitive and user-friendly, designed to match your puzzle's unique pattern.",
  "Unlocking new puzzle-solving possibilities with artificial intelligence and machine learning integration.",
  "Crafting captivating user interfaces and enriching user experiences, adding the final touches to your digital puzzle.",
  "Constructing robust and scalable e-commerce platforms, connecting the pieces that drive business growth.",
  "Assembling cutting-edge mobile apps that fit seamlessly across platforms, creating an engaging user experience."
];
let text_idx = 0;
let hasleft = false;
let tech_img = document.getElementsByClassName("tech-img");
let img_1 = document.getElementsByClassName("img-1");
let img_2 = document.getElementsByClassName("img-2");
let slider_img = document.getElementsByClassName("slider-img");


function display_menu()
{
    ham_btn.addEventListener
    (
        "click",
        function()
        {
            if(!isopen)
            {
                mob_menu.style.display = "block";
                isopen = true;
            }
            else
            {
                mob_menu.style.display = "none";
                isopen = false;
            }
        }
    )
}

// function is_scrolled_in(ele)
// {
//     let elem_rect = ele.getBoundingClientRect();
//     let top = elem_rect.top;
//     let bottom = elem_rect.bottom;
//     return ((bottom > window.innerHeight)) ;
// }

function start_ani(ele, css_ani)
{
    ele.style.animation = null;
    ele.offsetHeight;
    ele.style.animation = css_ani;
}


function hide_servcie()
{
    for(let i=0; i<service_arr.length; i++)
    {
      service_arr[i].addEventListener
      (
         "mouseleave",
         function()
         {
            text_idx = 0;
            hasleft = true;
            description_arr[i].style.display = "none";
         }
      )
    }
}


function tech_ani()
{

    slider_img[0].style.animation = null;
    slider_img[0].offsetHeight;
    slider_img[0].style.animation = "slide-in 0.5s 1";
    for(let i=1; i<slider_img.length; i++)
    {
        slider_img[i].style.visibility = "hidden";
    }
    for(let i=1; i<slider_img.length; i++)
    {
        slider_img[i - 1].addEventListener
        (
            "animationend",
            function()
            {
                slider_img[i].style.visibility = "visible";
                slider_img[i].style.animation = null;
                slider_img[i].offsetHeight;
                slider_img[i].style.animation = "slide-in 0.5s 1";
            }
        )
    }
}


display_menu();
tech_ani();
