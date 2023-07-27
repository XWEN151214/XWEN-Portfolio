// Global Variables
var ham_btn = document.getElementById("ham-btn");
var mob_menu = document.getElementById("mobile-menu");
var isopen = false; 
var main_h = document.getElementById("main-h");

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

display_menu();
document.addEventListener
(
    "scroll",
    function()
    {
        start_ani(profile_text, "slide-out 1s 1");
    }
)
