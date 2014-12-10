define(['CONFIG','Controller'],function(CONFIG,controller){
	var isInit = false;
	var game = {
		init:function(){
			require(['shaps'])
		}
		,start:function(controller){
			controller.start();
		}

	}
	return game;
})