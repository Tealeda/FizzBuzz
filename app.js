$(document).ready(function(){
	

	var max =  prompt("Please enter a number", +"");{
		fizzbuzzer(max);
    }
	
	function fizzbuzzer(max) {

	    function check(n) {
	      var msg = '';
	      if ( n % 3 == 0 ) { msg += "Fizz" };
	      if ( n % 5 == 0 ) { msg += "Buzz" };
	      return msg || n;
	    }

	    for (var i = 1; i <= max; i++) {
	      $("body").append(check(i) + '<br />');
	    }
	}
})




//Jfor loop examples:
  
// 	for (var i = 1; i <= 100; i++) {

// 	   if ((i % 3)== 0 && (i % 5) == 0 ) {
// 	   		$("body").append("fizzbuzz");
// 	   	} else if ((i % 3)== 0 ) {
// 	   		$("body").append("fizz");
// 	   } else if ((i % 5) == 0 ) {
// 	   		$("body").append("buzz");
// 	   } else {
// 	   		$("body").append(i + ', ');
// 		} 
// 	}
  

//     var i, text;
    
// 	for ( i = 0; i <= 100; i += 1) {
//         text = '';
        
// 	   if ((i % 3) === 0 ) {
// 	   		text += 'fizz';
//        } 
	    
// 	   if ((i % 5) === 0 ) {
//            text += 'buzz';
//        } 
//        $('body').append( i + ' ' + text + '<br />'); 
// 	}
  
