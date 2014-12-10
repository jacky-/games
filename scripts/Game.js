define(['CONFIG', 'Controller'], function(CONFIG, controller) {
	var game = {
		init: function() {},
		start: function() {
			controller.start();
		},
		stop: function() {
			controller.stop();
		}

	}
	return game;
})