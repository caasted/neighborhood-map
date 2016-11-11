var map;
var markers = [];

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: {lat: 37.41287, lng: -121.947925}
	});

	var marker = new google.maps.Marker({
		position: {lat: 37.4092511, lng: -121.9466402},
		map: map,
		title: "Samsung Semiconductor"
	});
	marker.setAnimation(google.maps.Animation.BOUNCE);
	markers.push(marker);

	var marker = new google.maps.Marker({
		position: {lat: 37.411929, lng: -121.955535},
		map: map,
		title: 'Cisco (Building I)'
	});
	markers.push(marker);

	var marker = new google.maps.Marker({
		position: {lat: 37.4183611, lng: -121.9415056},
		map: map,
		title: 'Microchip Technology, Inc.'
	});
	markers.push(marker);

	var marker = new google.maps.Marker({
		position: {lat: 37.4159217, lng: -121.9478348},
		map: map,
		title: 'Zscalar'
	});
	markers.push(marker);

	var marker = new google.maps.Marker({
		position: {lat: 37.4184695, lng: -121.9524612},
		map: map,
		title: 'Brocade'
	});
	markers.push(marker);

	var marker = new google.maps.Marker({
		position: {lat: 37.417368, lng: -121.947563}, 
		map: map, 
		title: 'ARM Inc.'
	});
	markers.push(marker);

	var marker = new google.maps.Marker({
		position: {lat: 37.415195, lng: -121.952552}, 
		map: map, 
		title: 'Lam Research Corporation'
	});
	markers.push(marker);

	var marker = new google.maps.Marker({
		position: {lat: 37.41287, lng: -121.947925}, 
		map: map, 
		title: 'Microsemi'
	});
	markers.push(marker);

	var marker = new google.maps.Marker({
		position: {lat: 37.409758, lng: -121.956866}, 
		map: map, 
		title: 'Silver Spring Networks'
	});
	markers.push(marker);

	var marker = new google.maps.Marker({
		position: {lat: 37.409489, lng: -121.954709}, 
		map: map, 
		title: 'ForeScout Technologies'
	});
	markers.push(marker);

	var marker = new google.maps.Marker({
		position: {lat: 37.40568, lng: -121.949427}, 
		map: map, 
		title: 'Maxim Integrated'
	});
	markers.push(marker);

	var marker = new google.maps.Marker({
		position: {lat: 37.411077, lng: -121.939175}, 
		map: map, 
		title: 'NetScout Systems Inc.'
	});
	markers.push(marker);

	var marker = new google.maps.Marker({
		position: {lat: 37.407721, lng: -121.943222}, 
		map: map, 
		title: 'Analog Devices Inc'
	});
	markers.push(marker);

	var marker = new google.maps.Marker({
		position: {lat: 37.418414, lng: -121.945009}, 
		map: map, 
		title: 'MapR Technologies'
	});
	markers.push(marker);

	var marker = new google.maps.Marker({
		position: {lat: 37.410149, lng: -121.950916}, 
		map: map, 
		title: 'Cypress Semiconductor Corporation'
	});
	markers.push(marker);

}

function setMapOnAll(map) {
	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(map);
	}
}

function clearMarkers() {
	setMapOnAll(null);
}

function showMarkers() {
	setMapOnAll(map);
}

/*
function toggleBounce() {
	if (marker.getAnimation() !== null) {
		marker.setAnimation(null);
	} else {
		marker.setAnimation(google.maps.Animation.BOUNCE);
	}
}
*/

