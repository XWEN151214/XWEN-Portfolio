// Global Variable
let project_box = document.getElementsByClassName("project-box");
let slide_project = [];
let next_project = document.getElementById("next-project");
let prev_project = document.getElementById("prev-project");
let mid = 1
let last = 2;
let first = 0;

function adjust_box()
{
    for(let i=0; i<project_box.length; i++)
    {
        slide_project.push(project_box[i]);
        if(i > 2)
        {
            project_box[i].style.display = "none";
        }
    }

}

function translate()
{
    slide_project[1].style.transform = `scale(${1.1})`;
    for(let i=mid; i<project_box.length; i++)
    {
        if(mid - i >= 0)
        {
            slide_project[mid - i].style.transform = `scale(${0.9})`;
        }
        if(mid + i < project_box.length)
        {
            slide_project[mid + i].style.transform = `scale(${0.9})`;
        }
    }
}

function slide_next()
{
    if(last < project_box.length - 1)
    {
        slide_project.shift().style.display = "none";
        project_box[last + 1].style.display = "flex";
        slide_project.push(project_box[last + 1]);
        last++;
        first++;
        translate();
    }
}

function set_transition(currrent_ani)
{
    if(currrent_ani < project_box.length - 1)
    {
        console.log(currrent_ani);
        project_box[currrent_ani].style.animation = "slide-next 1s 1";
        project_box[currrent_ani].addEventListener
        (
            "animationend",
            function()
            {
                currrent_ani++;
                set_transition(currrent_ani);
            }
        )
    }
}

function slide_prev()
{
    if(first > 0)
    {
        slide_project.pop().style.display = "none";
        project_box[first - 1].style.display = "flex";
        slide_project.unshift(project_box[first - 1]);
        first--;
        last--;
        translate();
    }
}

adjust_box();
translate();
next_project.addEventListener
(
    "click",
    slide_next
);
prev_project.addEventListener
(
    "click",
    slide_prev
);


