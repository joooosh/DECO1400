  
  //this plug-in is downloaded from http://api.jqueryui.com/tabs , this plug-in produces the effect of tabs
  $(function() { 
   // $( "#tabs").tabs();//run the function tabs() to the #tabs
	$( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  });
  
  
  
  //this plug-in is download from http://jqueryui.com/accordion/ ,this plug-in produces the effect of accordion
  $(function() {
    $( ".accordion" ).accordion({// run the function accordion to the ".accordion"
     collapsible: true,//makes it collapsible
	 active: false,//keep all the accordion tabs closed 
	 header: "h3" , //make h3 the header
	 heightStyle: "content"//make the accordion tabs conform to the height of their respective content
    });

})
 