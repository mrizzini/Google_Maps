/*global $ */

$(document).ready(function() {
   
   $.ajax({
			method: "GET",
			url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=41.8,-71.3&key=AIzaSyAzdJac0B31aHreKTTRZO1XPhTOsWYIFE0",
			data: {
			
			},
			
			success: function(data) {
			    document.getElementById("place").innerHTML = data.results[0].formatted_address;
			}
		
		
			
   });
   
    
    
    
    
    
    
    
    
    
    
    
    
    
});