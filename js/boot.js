var bootState = {
	preload: function () {
		//load the image
		game.load.image('progressBar', 'assets/progressBar.png');
	},
	create: function () {
		game.stage.backgroundColor = "#3498db";
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.renderer.renderSession.roundPixels = true;
		if (!game.device.desktop) {
			game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			game.scale.setMinMax(game.width/2, game.height/2, game.width*2, game.height*2);
			game.scale.pageAlignHorizontally = true;
			game.scale.pageAlignVertically = true;
			document.body.style.backgroundColor = '#3498db';
		}

		game.state.start('load');
	}
};
