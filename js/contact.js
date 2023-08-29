function send_form()
{
    let form = document.forms[1];
    let form_name = form['name'];
    let form_email = form['email'];
    let form_number = form['number'];
    let form_message = form['message'];
    if(!form_name.value || !form_email.value || !form_number.value || 
        !form_message.value)
    {
        alert("Please fill the form completely");
    }
    else
    {
        window.open(`mailto:xwen151214@gmail.com?subject=Contact Form Submission&body=${msg}`);
    }
}



