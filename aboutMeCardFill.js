$(document).ready(function(){
    $.get("https://randomuser.me/api/", 
          function(data, status)
          {
                $("#card_name").append(data.results[0].user.name.first + ' ' + data.results[0].user.name.last);
          });
});