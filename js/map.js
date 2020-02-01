//This function is to generate the google map. It is provided by Goole map on https://developers.google.com/maps/.
 function initialize() {
        var map_canvas = document.getElementById('map_canvas'); //create a canvas
		var myLatLng = new google.maps.LatLng(-27.457574, 152.987463); //the longitude and latitude of the position
        var map_options = {//set map options
          center: myLatLng, //make the centre of the map to be the position
          zoom: 8, //set the zoom level
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options)
		 var marker = new google.maps.Marker({//add a marker to the map
			position: myLatLng,// set the position of the marker 
			map: map,
  });
      }
      google.maps.event.addDomListener(window, 'load', initialize);