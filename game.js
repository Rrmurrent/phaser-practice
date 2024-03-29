$( document ).ready(function() {
  console.log( "game.js loaded" );
  console.log( "game2.js is loaded" );
});

// Defining "gameState"
const gameState = {};

function preload() {
  this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
   // load our 'incredible' sound here!
   this.load.audio('incredible', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/incredible.mp3')
  
   this.load.audio('awesome', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/reallyawesome.mp3')
}

function create() {
  gameState.circle = this.add.circle(20, 20, 5, 0xff0000);
  // Creating the circle and assigning it to gameState.circle

  gameState.codey = this.add.sprite(150, 200, 'codey')
  // Setting cursor keys
  gameState.cursors=
  this.input.keyboard.createCursorKeys();


}

function update() {
  // Updating circle in gameState.circle
 gameState.circle.y += 1;
   gameState.circle.x += 1;

    // Update based on keypress
 if (gameState.cursors.right.isDown) {
 
  gameState.codey.x += 5;
}
 if (gameState.cursors.left.isDown) {
   gameState.codey.x -= 5;
 }
 if (gameState.cursors.up.isDown) {
   gameState.codey.y -=5;
 }
 if (gameState .cursors.down.isDown) {
   gameState.codey.y +=5;
 }

}

const config = {
	type: Phaser.AUTO,
	width: 500,
	height: 600,
	backgroundColor: "#99ff99",
	scene: {
    preload,
    create,
    update
	}
}

const game = new Phaser.Game(config)

//-------------scratch work-----------//


//----------------Goals------------------
      //1. Continue to work on reloading only this div, so the circle continually moves.

        //Try One

            // function updateDiv()
            // { 
            //     $( ".circleDiv" ).load(window.location.href + " .circleDiv" );
            // }

            // updateDiv();

        //Try Two


            // function updateDiv()
            //  { 
            // $(".circleDiv").load(".circleDiv");
            // }
            // updateDiv();


// CONSOLE SAYS ITS A CORS ISSUES...ALSO, DOES PHASER WORK ON CHROME?

      //2. When sprite moves over button, que the audio. 
      //3. Change sprite
      //4. Change Audio--research local files + Phaser
      //5. Make game
//----------End scratch work-------------//



