// p5.js
let isShows = false;
let isLips = false;
let lipsimg, faceimg, eyeimg, neckimg, christmasHead, beard, noseimg;
let isFace = false;
let isEye = false;
let isNeck = false;
let isChristmas = false;
let isBeard = false;
let isNose = false;
let isBg1 = false;
let isBg2 = false;
let isBg3 = false;
let isBg4 = false;
let isBg5 = false;
let bg1, bg2, bg3, bg4, bg5;

cont = [
  127, 234, 132, 58, 172, 150, 149, 148, 152, 377, 378, 379, 397, 288, 361, 454,
  356,
];
lips = [57, 40, 37, 0, 267, 270, 287, 321, 314, 17, 84, 91];
brows = [70, 63, 105, 66, 107, 336, 296, 334, 293, 300];
nose = [168, 6, 195, 4, 98, 97, 2, 326, 327];
eyes = [33, 160, 158, 133, 153, 144, 362, 385, 387, 263, 373, 380];
mouth = [78, 81, 13, 311, 308, 402, 14, 178];
face = [10, 234, 152, 454];

// // get div
let facediv = document.getElementById("face");
let headdiv = document.getElementById("head");
let bearddiv = document.getElementById("beard");
let nosediv = document.getElementById("nose");
let eyediv = document.getElementById("eye");
let necklessdiv = document.getElementById("neck");
let lipsdiv = document.getElementById("lips");
let bg1div = document.getElementById("bg1");
let bg2div = document.getElementById("bg2");
let bg3div = document.getElementById("bg3");
let bg4div = document.getElementById("bg4");
let bg5div = document.getElementById("bg5");

// console.log(facediv);
facediv.onclick = function () {
  isFace = !isFace;
  myp5.detectface();
};
headdiv.onclick = function () {
  isChristmas = !isChristmas;
  myp5.detectChristmas();
};
bearddiv.onclick = function () {
  isBeard = !isBeard;
  myp5.detectBeard();
};
nosediv.onclick = function () {
  isNose = !isNose;
  myp5.detectNose();
};
eyediv.onclick = function () {
  isEye = !isEye;
  myp5.detectEyes();
};
necklessdiv.onclick = function () {
  isNeck = !isNeck;
  myp5.detectNeck();
};
lipsdiv.onclick = function () {
  isLips = !isLips;
  myp5.detectLips();
};
bg1div.onclick = function () {
  isBg1 = !isBg1;
  myp5.detectBg1();
};
bg2div.onclick = function () {
  isBg2 = !isBg2;
  myp5.detectBg2();
};
bg3div.onclick = function () {
  isBg3 = !isBg3;
  myp5.detectBg3();
};
bg4div.onclick = function () {
  isBg4 = !isBg4;
  myp5.detectBg4();
};
bg5div.onclick = function () {
  isBg5 = !isBg5;
  myp5.detectBg5();
};

let sketch = function (p) {
  let canvas;

  p.preload = function () {
    lipsimg = p.loadImage("assets/lips.png");
    faceimg = p.loadImage("assets/full-mask-1.png");
    eyeimg = p.loadImage("assets/eye.png");
    neckimg = p.loadImage("assets/neck.png");
    christmasHead = p.loadImage("assets/headchristams.png");
    beard = p.loadImage("assets/beard.png");
    noseimg = p.loadImage("assets/nose.png");
    bg1 = p.loadImage("assets/background1.png");
    bg2 = p.loadImage("assets/background2.png");
    bg3 = p.loadImage("assets/background3.png");
    bg4 = p.loadImage("assets/background4.png");
    bg5 = p.loadImage("assets/background5.png");
  };

  p.setup = function () {
    canvas = p.createCanvas(280, 480);
    canvas.id("canvas");
  };

  p.draw = function () {
    p.clear();
    // face mash detection
    if (detections != undefined && isShows) {
      if (
        detections.multiFaceLandmarks != undefined &&
        detections.multiFaceLandmarks.length >= 1
      ) {
        p.faceMash();
      }
    }

    // detect lips
    if (detections != undefined && isLips) {
      if (
        detections.multiFaceLandmarks != undefined &&
        detections.multiFaceLandmarks.length >= 1
      ) {
        p.detectLips();
      }
    }

    // detect face
    if (detections != undefined && isFace) {
      if (
        detections.multiFaceLandmarks != undefined &&
        detections.multiFaceLandmarks.length >= 1
      ) {
        p.detectface();
      }
    }

    // detect eyes
    if (detections != undefined && isEye) {
      if (
        detections.multiFaceLandmarks != undefined &&
        detections.multiFaceLandmarks.length >= 1
      ) {
        p.detectEyes();
      }
    }

    // detect neck
    if (detections != undefined && isNeck) {
      if (
        detections.multiFaceLandmarks != undefined &&
        detections.multiFaceLandmarks.length >= 1
      ) {
        p.detectNeck();
      }
    }

    // detect christmas
    if (detections != undefined && isChristmas) {
      if (
        detections.multiFaceLandmarks != undefined &&
        detections.multiFaceLandmarks.length >= 1
      ) {
        p.detectChristmas();
      }
    }
    // detect beard
    if (detections != undefined && isBeard) {
      if (
        detections.multiFaceLandmarks != undefined &&
        detections.multiFaceLandmarks.length >= 1
      ) {
        p.detectBeard();
      }
    }

    // detect nose
    if (detections != undefined && isNose) {
      if (
        detections.multiFaceLandmarks != undefined &&
        detections.multiFaceLandmarks.length >= 1
      ) {
        p.detectNose();
      }
    }

    // detect bg1
    if (detections != undefined && isBg1) {
      if (
        detections.multiFaceLandmarks != undefined &&
        detections.multiFaceLandmarks.length >= 1
      ) {
        p.detectBg1();
      }
    }

    // detect bg2
    if (detections != undefined && isBg2) {
      if (
        detections.multiFaceLandmarks != undefined &&
        detections.multiFaceLandmarks.length >= 1
      ) {
        p.detectBg2();
      }
    }

    // detect bg3
    if (detections != undefined && isBg3) {
      if (
        detections.multiFaceLandmarks != undefined &&
        detections.multiFaceLandmarks.length >= 1
      ) {
        p.detectBg3();
      }
    }

    // detect 4
    if (detections != undefined && isBg4) {
      if (
        detections.multiFaceLandmarks != undefined &&
        detections.multiFaceLandmarks.length >= 1
      ) {
        p.detectBg4();
      }
    }

    // detect bg5
    if (detections != undefined && isBg5) {
      if (
        detections.multiFaceLandmarks != undefined &&
        detections.multiFaceLandmarks.length >= 1
      ) {
        p.detectBg5();
      }
    }
  };

  // detect face mash
  p.faceMash = function () {
    p.stroke(0);
    p.strokeWeight(3);

    for (let i = 0; i < detections.multiFaceLandmarks[0].length; i++) {
      let x = detections.multiFaceLandmarks[0][i].x * p.width;
      let y = detections.multiFaceLandmarks[0][i].y * p.height;
      p.vertex(x, y);
    }
    p.endShape();
  };

  // detect lips
  p.detectLips = function () {
    let x, y;
    // p.stroke(255, 0, 0);
    // p.strokeWeight(3);
    // p.beginShape(p.POINTS);
    for (let i = 0; i < lips.length; i++) {
      for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
        x = detections.multiFaceLandmarks[0][lips[i]].x * p.width;
        y = detections.multiFaceLandmarks[0][lips[i]].y * p.height;
        // p.vertex(x, y);
      }
    }
    // p.endShape();
    p.image(lipsimg, x - 20, y - 30);
    lipsimg.resize(90, 50);
  };

  // detect face
  p.detectface = function () {
    let x, y;
    // p.stroke(0, 255, 0);
    // p.strokeWeight(5);
    // p.beginShape(p.POINTS);
    for (let i = 0; i < face.length; i++) {
      for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
        x = detections.multiFaceLandmarks[0][face[i]].x * p.width;
        y = detections.multiFaceLandmarks[0][face[i]].y * p.height;
        // p.vertex(x, y);
      }
    }
    // p.endShape();
    p.image(faceimg, x - 210, y - 130);
    faceimg.resize(230, 300);
  };

  // detect eyes
  p.detectEyes = function () {
    let x, y;
    // p.stroke(0, 255, 0);
    // p.strokeWeight(5);
    // p.beginShape(p.POINTS);
    for (let i = 0; i < eyes.length; i++) {
      for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
        x = detections.multiFaceLandmarks[0][eyes[i]].x * p.width;
        y = detections.multiFaceLandmarks[0][eyes[i]].y * p.height;
        // p.vertex(x, y);
      }
    }
    // p.endShape();
    p.image(eyeimg, x - 105, y - 48);
    eyeimg.resize(140, 100);
  };

  // detect neck
  p.detectNeck = function () {
    let x, y;
    // p.stroke(0, 255, 0);
    // p.strokeWeight(5);
    // p.beginShape(p.POINTS);
    for (let i = 0; i < cont.length; i++) {
      for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
        x = detections.multiFaceLandmarks[0][cont[i]].x * p.width;
        y = detections.multiFaceLandmarks[0][cont[i]].y * p.height;
        // p.vertex(x, y);
      }
    }
    p.endShape();
    p.image(neckimg, x - 230, y + 110);
    neckimg.resize(300, 300);
  };

  // detect chrimstas
  p.detectChristmas = function () {
    let x, y;
    // p.stroke(0, 255, 0);
    // p.strokeWeight(5);
    // p.beginShape(p.POINTS);
    for (let i = 0; i < eyes.length; i++) {
      for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
        x = detections.multiFaceLandmarks[0][eyes[i]].x * p.width;
        y = detections.multiFaceLandmarks[0][eyes[i]].y * p.height;
        // p.vertex(x, y);
      }
    }
    // p.endShape();
    p.image(christmasHead, x - 220, y - 300);
    christmasHead.resize(350, 300);
  };

  // beardDetection
  p.detectBeard = function () {
    let x, y;
    // p.stroke(255, 0, 0);
    // p.strokeWeight(3);
    // p.beginShape(p.POINTS);
    for (let i = 0; i < lips.length; i++) {
      for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
        x = detections.multiFaceLandmarks[0][lips[i]].x * p.width;
        y = detections.multiFaceLandmarks[0][lips[i]].y * p.height;
        // p.vertex(x, y);
      }
    }
    // p.endShape();
    p.image(beard, x - 75, y - 55);
    beard.resize(200, 200);
  };

  // nose detection
  p.detectNose = function () {
    let x, y;
    // p.stroke(255, 0, 0);
    // p.strokeWeight(3);
    // p.beginShape(p.POINTS);
    for (let i = 0; i < nose.length; i++) {
      for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
        x = detections.multiFaceLandmarks[0][nose[i]].x * p.width;
        y = detections.multiFaceLandmarks[0][nose[i]].y * p.height;
        // p.vertex(x, y);
      }
    }
    // p.endShape();
    p.image(noseimg, x - 145, y - 90);
    noseimg.resize(240, 120);
  };

  // bg1 detection
  p.detectBg1 = function () {
    p.image(bg1, 0, 0);
  };
  // bg2 detection
  p.detectBg2 = function () {
    p.image(bg2, -20, -75);
    bg2.resize(350, 500);
  };
  // bg3 detection
  p.detectBg3 = function () {
    p.image(bg3, -20, -50);
    bg3.resize(350, 500);
  };
  // bg4 detection
  p.detectBg4 = function () {
    p.image(bg4, -20, -50);
    bg4.resize(350, 500);
  };
  // bg5 detection
  p.detectBg5 = function () {
    p.image(bg5, -20, -20);
    bg5.resize(340, 600);
  };

  // show and hide the key points
  p.keyPressed = function () {
    if (p.keyCode == p.LEFT_ARROW) {
      isShows = !isShows;
    }
    if (p.keyCode == p.RIGHT_ARROW) {
      isLips = !isLips;
    }
  };

  // check key press
  p.keyTyped = function () {
    if (p.key === "m") {
      isFace = !isFace;
    }
    if (p.key === "e") {
      isEye = !isEye;
    }
    if (p.key === "n") {
      isNeck = !isNeck;
    }
    if (p.key === "c") {
      isChristmas = !isChristmas;
    }
    if (p.key === "b") {
      isBeard = !isBeard;
    }
    if (p.key === "o") {
      isNose = !isNose;
    }
  };
};

let myp5 = new p5(sketch);
