Vue.component('board', {
	props: [ 'columns', 'rows' ],
	template: '#board-template'
});

Vue.component('enemy-board', {
	template: '#enemyBoard-template',
	props: [ 'columns', 'rows' ]
});

new Vue({
	el: '#main_game',
});

var ships = [
	{ type: 'Carrier', size: 5, sank: false, available: 1, location: [] },
	{ type: 'Battleship', size: 4, sank: false, available: 1, location: [] },
	{ type: 'Cruiser', size: 3, sank: false, available: 1, location: [] },
	{ type: 'Submarine', size: 3, sank: false, available: 1, location: [] },
	{ type: 'Destroyer', size: 2, sank: false, available: 1, location: [] }
];

window.addEventListener('load', init);
window.addEventListener('resize', init);

function init() {
	var tds = document.getElementsByTagName('td');
	var tdWidth = tds[0].clientWidth;
	for (i = 0; i < tds.length; i++) {
		tds[i].style.height = tdWidth + 'px';
	}
}

for (i in ships) {
	$('#shipspawn').append(
		"<button class='ships' onClick=placeShip(\"" + ships[i].type + "\")>" + ships[i].type + '</buton>'
	);
}

function placeShip(buttonID) {
	var ship = ships.filter(function(ships) { return ships.type === buttonID; });
	console.log (ship);
}
