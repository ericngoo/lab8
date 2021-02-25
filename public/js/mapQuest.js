function initMap() {
	// add your code here

	L.mapquest.key = 'XiaB1KIvun2TFVFRGAKhkqCuh9UEjF41';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.8785248, -117.2380747],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.8785248, -117.2380747], {
		icon: L.mapquest.icons.marker(), 
		draggable: false
	}).addTo(map);
}