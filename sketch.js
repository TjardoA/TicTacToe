let place01 = 0;
let place02 = 0;
let place03 = 0;
let place04 = 0;
let place05 = 0;
let place06 = 0;
let place07 = 0;
let place08 = 0;
let place09 = 0;

let end = false;
let turn = false;

function setup() {
  createCanvas(1200, 700);

  place01 = 0;
  place02 = 0;
  place03 = 0;
  place04 = 0;
  place05 = 0;
  place06 = 0;
  place07 = 0;
  place08 = 0;
  place09 = 0;

  turn = false;
}

function draw() {
  background("lightgreen");

  if (turn == false && end == false) {
    fill("blue");
    textSize(32);
    textStyle(BOLD);
    strokeWeight(0);
    text("Circle's Turn", 465, 30);
  } else if (turn == true && end == false) {
    fill("red");
    textSize(32);
    textStyle(BOLD);
    strokeWeight(0);
    text("Square's Turn", 465, 30);
  }

  fill("black");
  textSize(28);
  textStyle(BOLD);
  strokeWeight(0);
  text("BOTER", 80, 75);

  fill("black");
  textSize(28);
  textStyle(BOLD);
  strokeWeight(0);
  text("KAAS &", 80, 100);

  fill("black");
  textSize(28);
  textStyle(BOLD);
  strokeWeight(0);
  text("EIEREN", 80, 125);

  if (end == true) {
    fill(255);
    strokeWeight(4);
    textSize(40);
    textStyle(BOLD);
    text("PRESS ANY KEY TO RESTART", 255, 550);
  }

  strokeWeight(6);

  // Board
  if (end == false) {
    line(460, 70, 460, 630);
    line(660, 70, 660, 630);
    line(320, 250, 800, 250);
    line(320, 450, 800, 450);
  }

  if (end == false) {
    // circle & square
    fill(255);
    if (place01 == 1) {
      circle(390, 160, 80);
    } else if (place01 == 2) {
      square(340, 110, 80, 20);
    }

    if (place02 == 1) {
      circle(390, 350, 80);
    } else if (place02 == 2) {
      square(340, 310, 80, 20);
    }

    if (place03 == 1) {
      circle(390, 530, 80);
    } else if (place03 == 2) {
      square(340, 500, 80, 20);
    }

    if (place04 == 1) {
      circle(565, 160, 80);
    } else if (place04 == 2) {
      square(520, 110, 80, 20);
    }

    if (place05 == 1) {
      circle(565, 350, 80);
    } else if (place05 == 2) {
      square(520, 310, 80, 20);
    }

    if (place06 == 1) {
      circle(565, 530, 80);
    } else if (place06 == 2) {
      square(520, 500, 80, 20);
    }

    if (place07 == 1) {
      circle(750, 160, 80);
    } else if (place07 == 2) {
      square(700, 110, 80, 20);
    }

    if (place08 == 1) {
      circle(750, 350, 80);
    } else if (place08 == 2) {
      square(700, 310, 80, 20);
    }

    if (place09 == 1) {
      circle(750, 530, 80);
    } else if (place09 == 2) {
      square(700, 500, 80, 20);
    }
  }
  checkWin();
}

function mousePressed() {
  // first vertical row boxes
  if (
    mouseX > 320 &&
    mouseX < 460 &&
    mouseY > 70 &&
    mouseY < 250 &&
    place01 == 0
  ) {
    if (turn == false) {
      place01 = 1;
    } else {
      place01 = 2;
    }

    changeTurn();
  }

  if (
    mouseX > 320 &&
    mouseX < 460 &&
    mouseY > 250 &&
    mouseY < 450 &&
    place02 == 0
  ) {
    if (turn == false) {
      place02 = 1;
    } else {
      place02 = 2;
    }

    changeTurn();
  }

  if (
    mouseX > 320 &&
    mouseX < 460 &&
    mouseY > 450 &&
    mouseY < 630 &&
    place03 == 0
  ) {
    if (turn == false) {
      place03 = 1;
    } else {
      place03 = 2;
    }

    changeTurn();
  }

  // second vertical row boxes
  if (
    mouseX > 460 &&
    mouseX < 660 &&
    mouseY > 70 &&
    mouseY < 250 &&
    place04 == 0
  ) {
    if (turn == false) {
      place04 = 1;
    } else {
      place04 = 2;
    }

    changeTurn();
  }

  if (
    mouseX > 460 &&
    mouseX < 660 &&
    mouseY > 250 &&
    mouseY < 450 &&
    place05 == 0
  ) {
    if (turn == false) {
      place05 = 1;
    } else {
      place05 = 2;
    }

    changeTurn();
  }

  if (
    mouseX > 460 &&
    mouseX < 660 &&
    mouseY > 450 &&
    mouseY < 630 &&
    place06 == 0
  ) {
    if (turn == false) {
      place06 = 1;
    } else {
      place06 = 2;
    }

    changeTurn();
  }

  //third vertical row boxes
  if (
    mouseX > 660 &&
    mouseX < 800 &&
    mouseY > 70 &&
    mouseY < 250 &&
    place07 == 0
  ) {
    if (turn == false) {
      place07 = 1;
    } else {
      place07 = 2;
    }

    changeTurn();
  }

  if (
    mouseX > 660 &&
    mouseX < 800 &&
    mouseY > 250 &&
    mouseY < 450 &&
    place08 == 0
  ) {
    if (turn == false) {
      place08 = 1;
    } else {
      place08 = 2;
    }

    changeTurn();
  }

  if (
    mouseX > 660 &&
    mouseX < 800 &&
    mouseY > 450 &&
    mouseY < 630 &&
    place09 == 0
  ) {
    if (turn == false) {
      place09 = 1;
    } else {
      place09 = 2;
    }

    changeTurn();
  }
}

function changeTurn() {
  if (turn == false) {
    turn = true;
  } else {
    turn = false;
  }
}

// win system
function checkWin() {
  fill("blue");
  stroke(5);
  textStyle(BOLD);
  textSize(150);

  if (
    (place01 == 1 && place02 == 1 && place03 == 1) ||
    (place01 == 1 && place04 == 1 && place07 == 1) ||
    (place02 == 1 && place05 == 1 && place08 == 1) ||
    (place03 == 1 && place06 == 1 && place09 == 1) ||
    (place04 == 1 && place05 == 1 && place06 == 1) ||
    (place07 == 1 && place08 == 1 && place09 == 1) ||
    (place01 == 1 && place05 == 1 && place09 == 1) ||
    (place07 == 1 && place05 == 1 && place03 == 1)
  ) {
    text("circle wins", 180, 400);
  } else if (
    (place01 == 2 && place02 == 2 && place03 == 2) ||
    (place01 == 2 && place04 == 2 && place07 == 2) ||
    (place02 == 2 && place05 == 2 && place08 == 2) ||
    (place03 == 2 && place06 == 2 && place09 == 2) ||
    (place04 == 2 && place05 == 2 && place06 == 2) ||
    (place07 == 2 && place08 == 2 && place09 == 2) ||
    (place01 == 2 && place05 == 2 && place09 == 2) ||
    (place07 == 2 && place05 == 2 && place03 == 2)
  ) {
    fill("red");
    text("square wins", 170, 400);
  } else if (
    place01 != 0 &&
    place02 != 0 &&
    place03 != 0 &&
    place04 != 0 &&
    place05 != 0 &&
    place06 != 0 &&
    place07 != 0 &&
    place08 != 0 &&
    place09 != 0
  ) {
    fill("purple");
    text("Draw", 380, 400);
  }

  if (
    (place01 == 1 && place02 == 1 && place03 == 1) ||
    (place01 == 1 && place04 == 1 && place07 == 1) ||
    (place02 == 1 && place05 == 1 && place08 == 1) ||
    (place03 == 1 && place06 == 1 && place09 == 1) ||
    (place04 == 1 && place05 == 1 && place06 == 1) ||
    (place07 == 1 && place08 == 1 && place09 == 1) ||
    (place01 == 1 && place05 == 1 && place09 == 1) ||
    (place07 == 1 && place05 == 1 && place03 == 1) ||
    (place01 == 2 && place02 == 2 && place03 == 2) ||
    (place01 == 2 && place04 == 2 && place07 == 2) ||
    (place02 == 2 && place05 == 2 && place08 == 2) ||
    (place03 == 2 && place06 == 2 && place09 == 2) ||
    (place04 == 2 && place05 == 2 && place06 == 2) ||
    (place07 == 2 && place08 == 2 && place09 == 2) ||
    (place01 == 2 && place05 == 2 && place09 == 2) ||
    (place07 == 2 && place05 == 2 && place03 == 2) ||
    (place01 != 0 &&
      place02 != 0 &&
      place03 != 0 &&
      place04 != 0 &&
      place05 != 0 &&
      place06 != 0 &&
      place07 != 0 &&
      place08 != 0 &&
      place09 != 0)
  ) {
    end = true;
  }
}

function keyPressed() {
  setup();
  end = false;
}
