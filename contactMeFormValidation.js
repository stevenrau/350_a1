function val_contact_form( form )
{
    console.log("in val_contact_form")
    var error = false;
    var first_name= form.firstname.value;  
    var last_name= form.lastname.value; 
    var email_val= form.email.value;
    var phone_val = form.phone.value;
    var date_val = form.date.value;
    var msg_text = form.message.value;
    
    if( first_name.length == 0)
    {
        error = true;
    }
    
    if( last_name.length == 0)
    {
         error = true;
    }
    
    if( email_val.length == 0)
    {
         error = true;
    }
    
    if( error )
    {
        alert("Complete your information");
        
        return false;
    }
    else
    {
        alert("Your information is correct");
        
        return true;
    } 
}