require.config({
    baseUrl: "./scripts",
    paths: {
 		'CONFIG':'Config'
    }
});

require(['Game'],function(Game){
	Game.init();
	// Game.start();
	// Game.top();
})
