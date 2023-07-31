// Global Variables
var logo_header = document.getElementById("logo-head");
var ham_btn = document.getElementById("ham-btn");
var mob_menu = document.getElementById("mobile-menu");
var isopen = false; 
var main_h = document.getElementById("main-h");
var service_arr = document.getElementsByClassName("service");
var description_arr = document.getElementsByClassName("description");
var service_text = document.getElementsByClassName("service-text");
var service_phrase = 
[
  "Piecing together bespoken web applications that are intuitive and user-friendly, designed to match your puzzle's unique pattern.",
  "Unlocking new puzzle-solving possibilities with artificial intelligence and machine learning integration.",
  "Crafting captivating user interfaces and enriching user experiences, adding the final touches to your digital puzzle.",
  "Constructing robust and scalable e-commerce platforms, connecting the pieces that drive business growth.",
  "Assembling cutting-edge mobile apps that fit seamlessly across platforms, creating an engaging user experience."
];
var text_idx = 0;
var hasleft;

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

function is_scrolled_in(ele)
{
    let elem_rect = ele.getBoundingClientRect();
    let top = elem_rect.top;
    let bottom = elem_rect.bottom;
    return ((top >=0) && (bottom < window.innerHeight));
}

function start_ani(ele, css_ani)
{
    if(is_scrolled_in(ele))
    {
       ele.style.animation = null;
       ele.offsetHeight;
       ele.style.animation = css_ani;
    }
}

function display_service()
{
   for(let i=0; i<service_arr.length; i++)
   {
     service_arr[i].addEventListener
     (
        "mouseenter",
        function()
        {
            hasleft = false;
            setTimeout(function(){}, 2000);
            description_arr[i].style.display = "block";
            description_arr[i].style.animation = null
            description_arr[i].offsetHeight;
            description_arr[i].style.animation = "fade-in 1s 1";
            type(service_phrase[i], service_text[i]);
        }
     )
   }
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
            hasleft = true;
            description_arr[i].style.display = "none";
            service_text[i].innerHTML = "";
            text_idx = 0;
         }
      )
    }
}

function type(phrase, text)
{
    console.log(text_idx);
    if(text_idx < phrase.length && !hasleft)
    {
        text.innerHTML += phrase[text_idx];
        text_idx++;
        setTimeout(
            function()
            {
               type(phrase, text);
            }, 50);
    }
    else
    {
        text_idx = 0;
        return null;
    }
}

display_menu();
display_service();
hide_servcie();
// document.addEventListener
// (
//     "scroll",
//     function()
//     {
//         start_ani(main_h, "fade-in 2s 1");
//     }
// )
