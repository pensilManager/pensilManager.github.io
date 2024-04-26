"use strict"

const canvas = document.getElementById("canvas");
//canvas.style.backgroundColor = "black";

const ctx = canvas.getContext("2d");
ctx.fillStyle = "gray";
ctx.strokeStyle = "black";
ctx.lineWidth = 1;

const borderWidth = 5;
const blockSize = 30;

for (let x = 0; x < 12; x++) {
  for (let y = 0; y < 24; y++) {
    ctx.fillRect(
      x * blockSize + borderWidth,
      y * blockSize + borderWidth,
      blockSize - borderWidth,
      blockSize - borderWidth
    );
  }
}

window.onkeydown = (e) => {
  handleKeyboardEvent(e);
};

function handleKeyboardEvent(e) {
  switch (e.code) {
    case "ArrowLeft":
      onClickLeftArrow(controlBlocks, stackedBlocks);
      break;
    case "ArrowRight":
      onClickRightArrow(controlBlocks, stackedBlocks);
      break;
    case "ArrowDown":
      onClickDownArrow(controlBlocks, stackedBlocks);
      break;
  }
}