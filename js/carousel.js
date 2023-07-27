// Global Variables
var intro_arr = document.getElementsByClassName("intro");
var next = document.getElementById("next")
var prev = document.getElementById("prev");
var slide_idx = 0;

function hide()
{
    for(let i=1; i<intro_arr.length; i++)
    {
        intro_arr[i].style.display = "none";
    }
}

function next_slide()
{
   if(slide_idx < intro_arr.length - 1)
   {
        intro_arr[slide_idx].style.display = "none";
        slide_idx++;
        intro_arr[slide_idx].style.display = "block";
   }
   else
   {
        intro_arr[slide_idx].style.display = "none";
        slide_idx = 0;
        intro_arr[slide_idx].style.display = "block";
   }
}

function prev_slide()
{
   if(slide_idx - 1 >= 0)
   {
        intro_arr[slide_idx].style.display = "none";
        slide_idx--;
        intro_arr[slide_idx].style.display = "block";
   }
   else
   {
        intro_arr[slide_idx].style.display = "none";
        slide_idx = intro_arr.length - 1;
        intro_arr[slide_idx].style.display = "block";
   }
}

hide();
next.addEventListener
(
    "click",
    next_slide
)
prev.addEventListener
(
    "click",
    prev_slide
)