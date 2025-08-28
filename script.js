// select element by id

function select(id) {
  return document.getElementById(`${id}`);
}

// get innertext

function getValue(id) {
  return Number(document.getElementById(`${id}`).innerText);
}

// call button functionality

function callBtnFunctionality(name, number) {
  let coins = getValue("coinCount");

  if (coins < 20) {
    alert("You Cannot Make A Call Due To Low Balance");
  } else {
    coins -= 20;
    select("coinCount").innerText = coins;
    addHistory(name, number);
  }
}

const list = ["emergency", "ambulance", "abuse", "consumer", "child", "fire"];

for (let element of list) {
  select(`${element}Btn`).addEventListener("click", function () {
    callBtnFunctionality(
      select(`${element}Text`).innerText,
      `${element}Number`
    );
  });
}

// add history functionality

let array = [];

function addHistory(name, number) {
  let time = new Date();
  let hours = String(time.getHours() % 12).padStart(2, "0");
  let mins = String(time.getMinutes()).padStart(2, "0");
  let seconds = String(time.getSeconds()).padStart(2, "0");
  select("historyParent").innerHTML = "";

  array.unshift(`
  <div class="bg-[#fafafa] rounded-[8px] p-4 mb-2 flex justify-between items-center">
          <div>
            <h1>${name}</h1>
            <h3 class="secondaryColor">${select(number).innerText}</h3>
          </div>
          <div class="text-[14px]">
            ${hours}:${mins}:${seconds} ${time.getHours() > 12 ? "PM" : "AM"}
          </div>
        </div>
  `);

  for (let i = 0; i <= array.length - 1; i++) {
    select("historyParent").innerHTML += array[i];
  }
}

// clear button functionality

select("clearBtn").addEventListener("click", function () {
  select("historyParent").innerHTML = "";
  array = [];
});

// heart react functionality

const heartButtons = document.getElementsByClassName("heartButtons");
let value = [0, 0, 0, 0, 0, 0];

for (let i = 0; i <= heartButtons.length - 1; i++) {
  heartButtons[i].addEventListener("click", function (event) {
    if (value[i] === 0) {
      value[i] = 1;
      select("heartCount").innerText =
        Number(select("heartCount").innerText) + 1;
      event.target.src = "./assets/heartFilled.png";
    } else {
      value[i] = 0;
      select("heartCount").innerText =
        Number(select("heartCount").innerText) - 1;
      event.target.src = "./assets/heart_logo.png";
    }
  });
}

// copy button functionality

function copyToClipBoard(id) {
  const text = document.getElementById(id).innerText;

  // copied from ChatGPT as we aren't taught this yet...

  async function copyText() {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }
  copyText();

  select("copyCount").innerText = Number(select("copyCount").innerText) + 1;
}

for (let element of list) {
  select(`${element}Copy`).addEventListener("click", function () {
    copyToClipBoard(`${element}Number`);
  });
}

console.log(select("emergencyText").innerText);
