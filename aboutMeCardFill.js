var info;

$(document).ready(function(){
    $.get("https://randomuser.me/api/", 
          function(data, status)
          {
                info = data;
                $("#card_name").append(data.results[0].user.name.first + ' ' + data.results[0].user.name.last);
        
                $("#card_pic").attr("src", data.results[0].user.picture.medium);
        
                $("#card_phone_num").append('Phone #: ' + data.results[0].user.phone);
        
                $("#card_email").append('Email: ' + data.results[0].user.email);
        
                $("#card_street").append(data.results[0].user.location.street);
        
                $("#card_city_state_zip").append(data.results[0].user.location.city + ', ' + 
                                                 data.results[0].user.location.state + '  ' +
                                                 data.results[0].user.location.zip);
          });
});

/* Called whenever the window gets resized */
$( window ).resize(function()
{
    var small_screen = 250;
    var screen_width = $( window ).width();
    
    /* Check if the retina display "flag" is set. Of so, use the high-res image */
    if ($('#retina_indicator').is(':visible'))
    {
        console.log("retina");
        $("#card_pic").attr("src", info.results[0].user.picture.large);
    }
    /* Or once the screen gets small enough, switch to the thumbnail img */
    else if (screen_width <= small_screen)
    {
        console.log("thumnail");
        $("#card_pic").attr("src", info.results[0].user.picture.thumbnail);
    }
    else if (screen_width > small_screen)
    {
        console.log("medium");
        $("#card_pic").attr("src", info.results[0].user.picture.medium);   
    }
});