var menuState = {
	create: function(){
		//best score
		if (!localStorage.getItem('bestScore')){
			localStorage.setItem('bestScore',0);
		}
		if (game.global.score > localStorage.getItem('bestScore')){
			localStorage.setItem('bestScore', game.global.score);
		}
		//Add a background image
		game.add.image(0, 0, 'background');
		// display the name of the game
		var nameLabel = game.add.text(game.width/2, -50, 'Super Coin Box', {font: '50px Geo', fill: '#ffffff'});
		nameLabel.anchor.setTo(0.5, 0.5);
		game.add.tween(nameLabel).to({y:80}, 1000).easing(Phaser.Easing.Bounce.Out).start();
		//show the score at the center of the screen
		var text = 'score: '+game.global.score+'\nbest score: '+localStorage.getItem('bestScore');
		var scoreLabel = game.add.text(game.width/2, game.height/2, text, {font: '25px Arial', fill: '#ffffff'});
		scoreLabel.anchor.setTo(0.5, 0.5);
		//explain how to start the game
		if(game.device.desktop){
			text = 'press the up arrow key to start'
		} else {
			text = 'touch the screen to start';
		}
		var startLabel = game.add.text(game.width/2, game.height-80, text, {font: '25px Arial', fill: '#ffffff'});
		startLabel.anchor.setTo(0.5, 0.5);
		game.add.tween(startLabel).to({angle: -2}, 500).to({angle: 2}, 1000).to({angle: 0}, 500).loop().start();
		//create a new Phaser keyboard variable: the up arrow key
		//when pressed, call the 'start'
		var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.add(this.start, this);
		if (!game.device.desktop) {
			game.input.onDown.add(this.start, this);
		}
		//sound menu
		this.muteButton = game.add.button(20,20,'mute',this.toggleSound,this);
		this.muteButton.frame = game.sound.mute?1:0;
	},

	start: function(){
		if (!game.device.desktop && game.input.y < 50 && game.input.x < 60){
			return;
		}
		//Start the actual game
		game.state.start('play');
	},

	toggleSound: function(){
		game.sound.mute = !game.sound.mute;
		this.muteButton.frame = game.sound.mute?1:0;
	}
}
