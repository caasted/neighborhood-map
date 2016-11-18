var Company = function (data) {
	this.id = ko.observable(data.id);
	this.name = ko.observable(data.name);
	this.position = ko.observable(data.position);
	this.city = ko.observable(data.city);
};

var ViewModel = function () {
	var self = this;

	this.coList = ko.observableArray([]);

	companies.forEach(function(coItem) {
		self.coList.push( new Company(coItem) );
	});

	this.cityList = ko.observableArray(cities);

	this.filter = ko.observable("");

	// The following filter function was adapted from 
	// http://stackoverflow.com/questions/13664499/how-to-filter-using-a-dropdown-in-knockout
	this.displayCoList = ko.computed(function() {
		if (!self.filter() || self.filter() == "All") {
			return self.coList();
		} else {
			return ko.utils.arrayFilter(self.coList(), function(company) {
				return company.city() == self.filter();
			});
		}
	});

	this.updateMarkers = ko.computed(function () {
		if (!self.filter() || self.filter() == "All") {
			markers.forEach( function (marker) {
				marker.setVisible(true);
			});
		} else {
			markers.forEach( function (marker) {
				marker.setVisible(false);
			});
			self.deactivateAll();
			self.coList().forEach( function( company ) {
				if (company.city() == self.filter()) {
					markers[ company.id() ].setVisible(true);
				}
			});
		}
	});

	this.currentCo = ko.observable( this.coList()[0] );

	this.selectCo = function( selectedCo ) {
		self.currentCo(selectedCo);
		self.deactivateAll();
		self.activateCo( self.currentCo().id() );		
	};

	this.deactivateAll = function () {
		markers.forEach( function(marker) {
			marker.setAnimation(null);
		});
		infowindows.forEach( function(infowindow) {
			infowindow.close();
		});
	};

	this.activateCo = function ( activeCo ) {
		markers[ activeCo ].setAnimation( google.maps.Animation.BOUNCE );
		map.setCenter(self.currentCo().position() );
		infowindows[ activeCo ].setContent( content );
		infowindows[ activeCo ].open(map, markers[ activeCo ]);
		indeedQuery( self.currentCo().name() );
	};
};

ko.applyBindings(new ViewModel());
