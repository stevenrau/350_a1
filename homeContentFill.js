$(document).ready(function() 
{
    /* Provide parameters to the API call as per assignment spec:
       type:all-meat (what text to get), start-with-lorem:1 (can only be 1),
       paras:2 (# of paragraphs) */
    $.get('http://baconipsum.com/api/?callback=?', 
          {'type':'all-meat', 'start-with-lorem':'1', 'paras':'2'}, 
          function(data)
            {
                 /* Make sure that we have data */
			     if (data && data.length > 0)
			     {
                     /* Then fill the #main_text div on the homepage */
                     $("#main_text").html('');
				     for (var i = 0; i < data.length; i++)
                     {
                         /* Each paragraph is a new offset in data */
					     $("#main_text").append('<p>' + data[i] + '</p>');
                     }
				     $("#main_text").show();
			     }
		      });
});