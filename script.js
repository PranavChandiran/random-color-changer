const btn = document.getElementById("btn");
const txt = document.getElementById("txt");
const body = document.getElementById("body");
const copyBtn = document.getElementById("copyBtn");
const alert01 = document.getElementById("alert1");
let clickTime = 0;

btn.onclick = function () {
  clickTime++;
  let r = Math.floor(Math.random() * 130);
  let g = Math.floor(Math.random() * 100);
  let b = Math.floor(Math.random() * 90);
  console.log(clickTime);
  body.style.background = `rgb(${r},${g},${b})`;
  // (body.style.background = btn.style.background),
  txt.innerHTML = `rgb(${r},${g},${b})`;

  copyBtn.onclick = function () {
    if (btn.onclick) {
      navigator.clipboard.writeText(`rgb(${r},${g},${b})`);

      alert01.style.display = "flex";

      setTimeout(() => {
        clearInterval((alert01.style.display = "none"));
      }, 1000);
    }
  };
};

// console.log(btn, txt, body, copyBtn, alert01);
