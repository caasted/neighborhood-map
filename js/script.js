var Company = function (data) {
	this.id = ko.observable(data.id);
	this.name = ko.observable(data.name);
	this.hidden = ko.observable(data.hidden);
	this.position = ko.observable(data.position);
	this.city = ko.observable(data.city);
}

var ViewModel = function () {
	var self = this;

	this.coList = ko.observableArray([]);

	companies.forEach(function(coItem) {
		self.coList.push( new Company(coItem) );
	});

	this.currentCo = ko.observable( this.coList()[0] );

	this.selectCo = function( selectedCo ) {
		self.currentCo(selectedCo);
		self.deactivateAll();
		self.activateCo( self.currentCo().id() );		
	}

	this.deactivateAll = function () {
		markers.forEach( function(marker) {
			marker.setAnimation(null);
		});
		infowindows.forEach( function(infowindow) {
			infowindow.close();
		});
	}

	this.activateCo = function ( activeCo ) {
		markers[ activeCo ].setAnimation( google.maps.Animation.BOUNCE );
		infowindows[ activeCo ].setContent( contentStart + 
			self.currentCo().name() + contentClose);
		infowindows[ activeCo ].open(map, markers[ activeCo ]);
	}
}

ko.applyBindings(new ViewModel())
