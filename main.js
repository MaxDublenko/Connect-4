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

let board = [ [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0] ];

let columnSelect = 0;

let win;

let winText = {
  win: "You Won!",
  lose: "Computer Won, You Lose."
}

let keys = Object.keys(localStorage)

let winText_serialized = JSON.stringify(winText);

localStorage.setItem('winText', winText_serialized);

let winText_deserialized = JSON.parse(localStorage.getItem('winText'));

function checkWin() {

  // For Human Player

  // Check Horizontally
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] == 1 && board[i][j + 1] == 1 && board[i][j + 2] == 1 && board[i][j + 3] == 1) {
        win = true;
        alert(winText_deserialized.win);
      }
    }
  }

  // Check Vertically
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[j][i] === 1 && board[j + 1][i] === 1 && board[j + 2][i] === 1 && board[j + 3][i] === 1) {
        win = true;
        alert(winText_deserialized.win);
      }
    }
  }

  // Check Diagonally Left

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[j][i] === 1 && board[j + 1][i + 1] === 1 && board[j + 2][i + 2] === 1 && board[j + 3][i + 3] === 1) {
        win = true;
        alert(winText_deserialized.win);
      }
    }
  }

  // Check Diagonally Right

  for (let i = 0; i < 4; i++) {
    for (let j = 5; j > 2; j--) {
      if (board[j][i] === 1 && board[j - 1][i + 1] === 1 && board[j - 2][i + 2] === 1 && board[j - 3][i + 3] === 1) {
        win = true;
        alert(winText_deserialized.win);
      }
    }
  }

  // For AI Player
  // Check Horizontally
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] === 2 && board[i][j + 1] === 2 && board[i][j + 2] === 2 && board[i][j + 3] === 2) {
        win = false;
        alert(winText_deserialized.lose);
      }
    }
  }

  // Check Vertically
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[j][i] === 2 && board[j + 1][i] === 2 && board[j + 2][i] === 2 && board[j + 3][i] === 2) {
        win = false;
        alert(winText_deserialized.lose);
      }
    }
  }

  // Check Diagonally Left

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[j][i] === 2 && board[j + 1][i + 1] === 2 && board[j + 2][i + 2] === 2 && board[j + 3][i + 3] === 2) {
        win = false;
        alert(winText_deserialized.lose);
      }
    }
  }

  // Check Diagonally Right

  for (let i = 0; i < 4; i++) {
    for (let j = 5; j > 2; j--) {
      if (board[j][i] === 2 && board[j - 1][i + 1] === 2 && board[j - 2][i + 2] === 2 && board[j - 3][i + 3] === 2) {
        win = false;
        alert(winText_deserialized.lose);
      }
    }
  }

  // Computer's Turn

  if (win !== true) {
    aiTurn();
  }

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

  if (win !== true) {
    requestAnimationFrame(draw);
  }
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
  } else if (mousePos.x < 200 && full2 === false) {
    for (let i = 5; i >= 0; i--) {
      if (board[i][1] == 0) {
        board[i][1] = 1;
        break;
      }
    }
  } else if (mousePos.x < 300 && full3 === false) {
    for (let i = 5; i >= 0; i--) {
      if (board[i][2] == 0) {
        board[i][2] = 1;
        break;
      }
    }
  } else if (mousePos.x < 400 && full4 === false) {
    for (let i = 5; i >= 0; i--) {
      if (board[i][3] == 0) {
        board[i][3] = 1;
        break;
      }
    }
  } else if (mousePos.x < 500 && full5 === false) {
    for (let i = 5; i >= 0; i--) {
      if (board[i][4] == 0) {
        board[i][4] = 1;
        break;
      }
    }
  } else if (mousePos.x < 600 && full6 === false) {
    for (let i = 5; i >= 0; i--) {
      if (board[i][5] == 0) {
        board[i][5] = 1;
        break;
      }
    }
  } else if (mousePos.x < 700 && full7 === false) {
    for (let i = 5; i >= 0; i--) {
      if (board[i][6] == 0) {
        board[i][6] = 1;
        break;
      }
    }
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

document.getElementById('newGame').addEventListener('click', newGame_handler)

function newGame_handler() {
  location.reload();
}























































































































// End of Script
