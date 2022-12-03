let scoreInput = document.getElementById("score-input");
let commentButton = document.getElementById("comment-button");

function check() {
  let comments = document.getElementsByClassName("output");
  for(let i = 0; i < 4; i++){
    comments[i].innerHTML = "";
  }

  if (isNaN(scoreInput.value)) {
    let rateComment = document.getElementById("invalid-input");
    rateComment.innerHTML = "Không đúng định dạng";
  } else {
    if (scoreInput.value >= 8 && scoreInput.value <= 10) {
      let rateComment = document.getElementById("good-comment");
      rateComment.innerHTML = "Làm tốt lắm";
    } else if (scoreInput.value < 8 && scoreInput.value >= 6) {
      let rateComment = document.getElementById("normal-comment");
      rateComment.innerHTML = "Tạm được";
    } else if (scoreInput.value < 6 && scoreInput.value > 0) {
      let rateComment = document.getElementById("bad-comment");
      rateComment.innerHTML = "Tệ";
    } else {
      let rateComment = document.getElementById("invalid-input");
      rateComment.innerHTML = "Không đúng định dạng";
    }
  }
}
