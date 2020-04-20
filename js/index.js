(function(){
	AOS.init({
		duration:700
	});

	var name=$('#name'),
	    email=$('#email'),
	    title=$('#title'),
	    message=$('#message'),
	    action_message=$('#action_message'),
	    toast=$('#toast');

     function showtoast(){
            
                         $(toast).css('visibility','visible');
                         setTimeout(function(){
                            $(toast).css('visibility','hidden');
            	         },2000);

     }

	// $('.counter').countUp();
	 $('#send').click(function(e){
	 	e.preventDefault();
	 	  
         if (!/^[a-zA-Z ]{7,60}$/.test($(name).val())) {
             $(action_message).addClass('bg-danger');
            $(action_message).text('Invalid name, please fill correct name');
             
            $(toast).css('display','block !important');

         }
         else if(!/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/.test($(email).val())) {
             $(action_message).addClass('bg-danger');
            $(action_message).text('Invalid email, please fill correct email');	 
             $(toast).css('display','block !important'); 
         }
         else if(!/^[a-zA-Z ]{3,200}$/.test($(title).val())) {
             $(action_message).addClass('bg-danger');
            $(action_message).text('Invalid title, please fill correct title');
             $(toast).css('display','block !important');
          }
         else if(!/^[a-zA-Z ]{20,500}$/.test($(message).val())) {
             $(action_message).addClass('bg-danger');
            $(action_message).text('Invalid message, please fill correct message');
             $(toast).css('display','block !important'); 
         }
         else{
             $(action_message).addClass('bg-success');
            $(action_message).text('Thanks for contacting us');
              // $(toast).css('display','block !important');
              showtoast();
           }    
	 });

 }());