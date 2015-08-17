$(document).ready(function(){
		
		  var userFizzBuzz = function(userNum) {        
          var liItem = "<li></li>"
          var userString = prompt("Enter a number");
     	  var userDecimal = userString.indexOf('.') === -1;	
          var userNum = parseInt(userString);
          
            if(userNum && userDecimal) {
              for (var count = 1; count <= userNum; count++) {
                if (count % 3 != 0 && count % 5 != 0) {
                  $ ('ul').append(liItem).append(count);
                } else if (count % 3 == 0 && count % 5 == 0) {
                  $('ul').append(liItem).append("FizzBuzz");
                } else if (count % 3 == 0) {
                $('ul').append(liItem).append("Fizz");
                }  else if (count % 5 == 0) {
                  $('ul').append(liItem).append("Buzz");
                } 
              };
            } else {
                prompt("How about a number?")
                userFizzBuzz();
            }
          
        };

      userFizzBuzz();
    
      
});