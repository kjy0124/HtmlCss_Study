const input = document.querySelector(".input");
const buttons = document.querySelectorAll(".button");
const acBtn = document.getElementById("clear");
const result = document.querySelector(".result");

let display_num = 0;
let prev_num = null;
let current_operator = null;

//buttons을 통해 계산기의 모든 버튼을 순회
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //숫자 버튼을 클릭했을 때 클릭된 버튼을 타겟으로 한 텍스트를 가져옴
    let click_text = e.target.textContent;
    // console.log(click_text);

    //btn이 가리키는 버튼의 클래스 중 num이 있는지 확인
    if (btn.classList.contains("num")) {
      //display 숫자가 0인 경우. 숫자버튼을 클릭했을 때 display숫자 버튼에 클릭한 버튼 값 적용

      click_text = parseInt(click_text);
      if (display_num === "0") {
        display_num = click_text;
      } else {
        //display숫자가 0이 아닌 경우 기존 display_num에 클릭한 숫자버튼 값을 옆에 추가
        //입력한 값 뒤에 자라수 추가를 위해 *10
        display_num = display_num * 10 + click_text;
      }
      input.textContent = display_num;
      // console.log(typeof display_num);
    }

    //operator연산자
    if (btn.classList.contains('operator')) {
      if (prev_num === null) {
        prev_num = display_num;
      } else if (current_operator) {
        prev_num = calculator(prev_num, current_operator, display_num);
      }
      current_operator = click_text;
      if (click_text === '=') {
        result.textContent = prev_num;
        input.innerHTML = 0
      }
      display_num = 0;
      console.log(prev_num);
    }
    
    if (click_text === '±' && display_num !== 0) {
      display_num = display_num * (-1);
      input.textContent = display_num;
    }
  });
});

acBtn.addEventListener("click", () => {
    display_num = 0;
    prev_num = null;
    current_operator = null;
    result.innerHTML = '';
    input.textContent = display_num;
});

function calculator(prev_num, current_operator, display_num) {
  switch (current_operator) {
    case "+":
      return prev_num + display_num;
    case "-":
      return prev_num - display_num;
    case "x":
      return prev_num * display_num;
    case "/":
      return prev_num / display_num;
    case "%":
      return prev_num % display_num;
    default:
      return display_num;
  }
}
