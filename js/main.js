//(function(){


//$( ".draggable" ).draggable();
//$( ".droppable" ).droppable({
 // drop: function() {
//    alert( "dropped" );
//  }
//});

//}).call(this); 


      $(function() {
         $( "#draggable-3" ).draggable();
         $( "#droppable-6" ).droppable({
            activeClass: "active",
            hoverClass:  "hover",
            drop: function( event, ui ) {
               $( this )
              .addClass( "ui-state-highlight" )
              .find( "p" )
              .html( "Good guess, but no. In fact Iran says nuclear deal hinges on US lifting sanctions.");
            }
         });
         $( "#droppable-5" ).droppable({
            activeClass: "active",
            hoverClass:  "hover",
            drop: function( event, ui ) {
               $( this )
              .find( "p" )
              .html( "That's right,'Mr.Tough Guy' said this at the State of Nation Address in December 2014." );
            }
         });
      });
