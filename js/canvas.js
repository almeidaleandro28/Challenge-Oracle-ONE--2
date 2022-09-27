const writeCanvas = () => {
  board.lineWidth = 8;
  board.lineCap = "round"
  board.LineJoin = "round";
  board.fillStyle = "#0A3871"
  board.strokeStyle = "#0A3871"

  board.fillRect( 0, 0, 1000, 550 );
  board.beginPath();
  board.moveTo(300, 400 );
	board.lineTo(500, 400);
	board.stroke();
	// board.closePath();
}


const writeLines = () => {
  board.lineWidth = 6;
	board.lineCap = "round"
	board.LineJoin = "round";
	board.fillStyle = "white";
	board.strokeStyle = "white";

  const widthLine = 200 / secretWord.length;
 
 
  for ( let i = 0; i < secretWord.length; i++ ) {
        board.moveTo(400+(widthLine*i), 500)
				board.lineTo(415+(widthLine*i), 500)
  }

  board.stroke();
  // board.closePath();
}

// show correct word
const showCorrectWord = ( letter ) => {
  board.font = "bold 32px arial";
  board.lineCap = "round";
  board.fillStyle = "white";
  board.lineWidth = 5;
  const widthLetter = 200 / secretWord.length;
  board.fillText( correctWords[ letter ], 400+(widthLetter * letter), 470 );
  
}

const showWrongWord = ( letter, err ) => {
  board.font = "bold 32px arial";
  board.lineCap = "round";
  board.fillStyle = "white";
  board.lineWidth = 5;
  board.fillText( letter, 400+( 16 * err ), 540) ;
  
}