let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 610;

function resetBoard() {
  for (let i = 1; i < 7; i++) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.moveTo(i * 100, 0);
    ctx.lineTo(i * 100, cnv.height);
    ctx.stroke();
  }

  for (let i = 1; i < 6; i++) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.moveTo(0, i * 100);
    ctx.lineTo(cnv.width, i * 100);
    ctx.stroke();
  }
}

resetBoard();


// Human = Red
// AI = Yellow

// Human Goes First: Turn = 0

/*
let turn = 0;
let possibleMoves = 7;
let arcX;
let clicked = false;
let aiTurnDone = false;
*/
/*
document.getElementById('newGame').addEventListener('click', gameStart)

function gameStart() {
  document.getElementById('newGame').value = 'Restart';

}*/

// Empty = 0, Human = 1, AI = 2






let win = false;


let board = [ [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0] ]

let columnSelect = 0;

function checkWin() {

  // For Human Player

  // Check Horizontally
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] == 1 && board[i][j + 1] == 1 && board[i][j + 2] == 1 && board[i][j + 3] == 1) {
        alert('You Won!');
        //win = true;
      }
    }
  }

  // Check Vertically
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (board[i][j])
    }
  }
  /*

  going to check board[0][0]
            then board[1][0]
            then board[2][0]
            then board[3][0]
            then board[4][0]
            then board[5][0]

  */

  // For AI Player








}

requestAnimationFrame(draw);

function draw() {

  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Checking board

  resetBoard();

  ctx.strokeStyle = "rgba(1, 1, 1, 0)";

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 6; j++) {
      if (board[j][i] == 1) {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(i * 100 + 50, j * 100 + 50, 42, 0, 2 * Math.PI);
        ctx.fill();
      } else if (board[j][i] == 2) {
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(i * 100 + 50, j * 100 + 50, 42, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  }

  canvas.addEventListener('mousemove', function(evt) {
      var mousePos = getMousePos(canvas, evt);
      if (mousePos.x < 100) {
        columnSelect = 1;
      } else if (mousePos.x < 200) {
        columnSelect = 2;
      } else if (mousePos.x < 300) {
        columnSelect = 3;
      } else if (mousePos.x < 400) {
        columnSelect = 4;
      } else if (mousePos.x < 500) {
        columnSelect = 5;
      } else if (mousePos.x < 600) {
        columnSelect = 6;
      } else if (mousePos.x < 700) {
        columnSelect = 7;
      }
  }, false);

  if (columnSelect !== 0) {
    ctx.fillStyle = 'black';
    ctx.fillRect((columnSelect - 1) * 100, cnv.height - 10, 100, 10);
  }

  requestAnimationFrame(draw);
}

// Human Move

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

canvas.addEventListener('click', function(evt2) {
  var mousePos = getMousePos(canvas, evt2);
  checkFull();
  if (mousePos.x < 100 && full1 === false) {
    for (let i = 5; i >= 0; i--) {
      if (board[i][0] == 0) {
        board[i][0] = 1;
        break;
      }
    }
    aiTurn();
  } else if (mousePos.x < 200 && full2 === false) {
    for (let i = 5; i >= 0; i--) {
      if (board[i][1] == 0) {
        board[i][1] = 1;
        break;
      }
    }
    aiTurn();
  } else if (mousePos.x < 300 && full3 === false) {
    for (let i = 5; i >= 0; i--) {
      if (board[i][2] == 0) {
        board[i][2] = 1;
        break;
      }
    }
    aiTurn();
  } else if (mousePos.x < 400 && full4 === false) {
    for (let i = 5; i >= 0; i--) {
      if (board[i][3] == 0) {
        board[i][3] = 1;
        break;
      }
    }
    aiTurn();
  } else if (mousePos.x < 500 && full5 === false) {
    for (let i = 5; i >= 0; i--) {
      if (board[i][4] == 0) {
        board[i][4] = 1;
        break;
      }
    }
    aiTurn();
  } else if (mousePos.x < 600 && full6 === false) {
    for (let i = 5; i >= 0; i--) {
      if (board[i][5] == 0) {
        board[i][5] = 1;
        break;
      }
    }
    aiTurn();
  } else if (mousePos.x < 700 && full7 === false) {
    for (let i = 5; i >= 0; i--) {
      if (board[i][6] == 0) {
        board[i][6] = 1;
        break;
      }
    }
    aiTurn();
  } else {
    alert('Sorry, go somewhere else.');
  }
  checkWin();

}, false);

let full1 = false;
let full2 = false;
let full3 = false;
let full4 = false;
let full5 = false;
let full6 = false;
let full7 = false;

function checkFull() {
  let full = 0;
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 6; j++) {
      if (board[j][i] !== 0) {
        full++;
        console.log(full);
        if (full === 6) {
          if (i === 0) {
            full1 = true;
          } else if (i === 1) {
            full2 = true;
          } else if (i === 2) {
            full3 = true;
          } else if (i === 3) {
            full4 = true;
          } else if (i === 4) {
            full5 = true;
          } else if (i === 5) {
            full6 = true;
          } else if (i === 6) {
            full7 = true;
          }
        }
      }
    }
    full = 0;
  }
}

function aiTurn() {

  checkFull();

  let moves = [0, 1, 2, 3, 4, 5, 6];

  if (full1 === true) {
    removeAll(moves, 0);
  }
  if (full2 === true) {
    removeAll(moves, 1);
  }
  if (full3 === true) {
    removeAll(moves, 2);
  }
  if (full4 === true) {
    removeAll(moves, 3);
  }
  if (full5 === true) {
    removeAll(moves, 4);
  }
  if (full6 === true) {
    removeAll(moves, 5);
  }
  if (full7 === true) {
    removeAll(moves, 6);
  }

  let move = Math.floor(Math.random() * moves.length);
  move = moves[move];

  for (let i = 5; i >= 0; i--) {
    if (board[i][move] === 0) {
      board[i][move] = 2;
      break;
    }
  }
}

function removeAll(anArray, item) {
  for (let i = 0; i < anArray.length; i++) {
    if (anArray[i] == item) {
      anArray.splice(i, 1);
      i--;
    }
  }
}



















/*
requestAnimationFrame(draw);

function draw() {
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  for (let i = 1; i < 7; i++) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.moveTo(i * 100, 0);
    ctx.lineTo(i * 100, cnv.height);
    ctx.stroke();
  }

  for (let i = 1; i < 6; i++) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.moveTo(0, i * 100);
    ctx.lineTo(cnv.width, i * 100);
    ctx.stroke();
  }

  // Check board


  // move 1


  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    if (clicked === false) {
      if (mousePos.x < 100) {
        arcX = 50;
      } else if (mousePos.x < 200) {
        arcX = 150;
      } else if (mousePos.x < 300) {
        arcX = 250;
      } else if (mousePos.x < 400) {
        arcX = 350;
      } else if (mousePos.x < 500) {
        arcX = 450;
      } else if (mousePos.x < 600) {
        arcX = 550;
      } else if (mousePos.x < 700) {
        arcX = 650;
      }
    }
  }, false);

  canvas.addEventListener('click', function(evt2) {
    var mousePos = getMousePos(canvas, evt2);
    clicked = true;
    aiTurn();
  }, false);

  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(arcX, 550, 42, 0, 2 * Math.PI);
  ctx.fill();

  if (aiTurnDone === true) {
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(aiX, 550, 42, 0, 2 * Math.PI);
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

/*
let aiX;

function aiTurn() {
  aiX = Math.ceil(Math.random() * 5) * 100 + 50;
  if (aiX === arcX && aiY) {
    aiX = Math.ceil(Math.random() * 5) * 100 + 50;
  }
  aiTurnDone = true;
}
*/











































































































































































// End of Script
