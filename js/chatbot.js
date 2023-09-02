let chat_btn = document.getElementById("bot-btn");
let chat_box = document.getElementById("bot-box");
let bot = document.getElementById("bot");
let bot_text = document.getElementsByClassName("bot-text");
let msg = document.getElementById("msg");
let ans_no = 0;
let bot_isopen = false;
let bot_idx = 0;

function intro()
{
    bot_text[bot_idx].style.display = "block";
    bot_text[bot_idx].style.animation = null;
    bot_text[bot_idx].offSetHeight;
    bot_text[bot_idx].style.animation = "slide-in 2s 1";
    bot_text[bot_idx].addEventListener
    (
        "animationend",
        function()
        {
            if(bot_idx < bot_text.length - 1)
            {
                bot_idx++;
                intro();
            }
        }
    )
}

function reset_ani(ele)
{
    for(let i=0; i<ele.length; i++)
    {
        ele[i].addEventListener
        (
            "animationend",
            function()
            {
                ele[i].style.animation = null;
            }
        )
    }
}

function read_input()
{
    if(msg.value != "")
    {
        bot.innerHTML += `<div class="human-text container-flex">
                                <p class="text-light py-2 px-2">
                                ${msg.value}
                                </p>
                          </div>`
        chat_ai(msg);
        msg.value = null;
    }
}

function answer(msg)
{
    setTimeout
        (
            ()=>
            {
                bot.innerHTML += 
                `<div class="bot-text ans container-flex">
                    <p class="text-light py-2 px-2"> 
                      ${msg}
                    </p>
                </div>`
            },
            1000
        );
}

function chat_ai(msg)
{
    if(msg.value.includes('ai') || msg.value.includes('Ai') 
    || msg.value.includes('model integration'))
    {
        answer(
                ` Great! contact us through our contact form<br>
                   we will be happy to help. Lets talk about it.`
              );
    }
    else if(msg.value.includes('api') || msg.value.includes('backend'))
    {
        answer(
                `We have vast experience working with apis and complex backends<br>
                read about our project on the oracle database. It will be a delight for us to <br>
                work with you.`
              );
    }
    else if(msg.value.includes('ecommerce') || msg.value.includes('Ecommerce') 
    || msg.value.includes('Ecomm') || msg.value.includes('ecomm'))
    {
        answer(
                `Ok an ecommerce store can be very easy to setup using technologies like 
                <br> Django or NodeJS, Contact us and we can start working on it right away.`
              );
    }
    else if(msg.value.includes('website'))
    {
        answer(
                `Allright great checkout our project on zeeniatravels<br>
                <a href=https://zeeniatravels.com/ target="_blank">Link</a>`
              );
    }
    else if(msg.value.includes('mobile') || msg.value.includes('android') || msg.value.includes('ios'))
    {
        answer(
                ` Sorry! we are still working on mobile development.<br>
                it will start soon.`
              );
    }
    else
    {
        answer(
                 `Sorry! I do not understand.`
              );
    } 
}

chat_btn.addEventListener
(
    "click",
    function()
    {
        if(!bot_isopen)
        { 
            chat_box.style.display = "block";
            bot_isopen = true;
            if(bot_idx == 0)
            {
                for(let i=0; i<bot_text.length; i++)
                {
                    bot_text[i].style.display = "none";
                }  
                intro();
                reset_ani(bot_text);
            }
        }
        else
        {
            chat_box.style.display = "none";
            bot_isopen = false;
        }
    }
);
