var map;
var markers = [];
var infowindows = [];

var initMap = function() {
	map = new google.maps.Map( document.getElementById( 'map' ), {
		zoom: 11,
		center: {lat: 37.3860517, lng: -122.0838511}
	});

	companies.forEach( function( company ) {
		var marker = new google.maps.Marker( {
			position: company.position, 
			map: map, 
			title: company.name
		});
		markers.push( marker );

		var infowindow = new google.maps.InfoWindow();
		infowindows.push( infowindow );

		marker.addListener('click', function() {
		   markers.forEach( function(marker) {
				marker.setAnimation(null);
			});
			infowindows.forEach( function(infowindow) {
				infowindow.close();
			});

			marker.setAnimation( google.maps.Animation.BOUNCE );
			map.panTo( company.position );

			infowindow.setContent( content );
			infowindow.open(map, marker);
			indeedQuery( company.name );
		});
	});
}

var googleMapError = function() {
	alert("Google Maps has encountered an error and could not be loaded.");
};