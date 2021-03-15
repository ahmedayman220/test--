let material = [
  [
    {
      name: "اللغه العربيه",
    },
    {
      name: "اللغه الاجنبيه الاولي ",
    },
    {
      name: "الرياضيات",
    },
    {
      name: "الكيمياء",
    },
    {
      name: "الفيزياء",
    },
    {
      name: "اللغه الاجنبيه الثانيه",
    },
    {
      name: "الأحياء",
    },
  ],
  [
    {
      name: "اللغه العربيه",
    },
    {
      name: "اللغه الاجنبيه الاولي ",
    },
    {
      name: "الرياضيات",
    },
    {
      name: "الجغرافيا",
    },
    {
      name: "التاريخ",
    },
    {
      name: "اللغه الاجنبيه الثانيه",
    },
    {
      name: "الفلسفه والمنطق",
    },
    {
      name: "علم النفس والجتماع",
    },
  ],
  [
    {
      name: "اللغه العربيه",
    },
    {
      name: "اللغه الاجنبيه الاولي ",
    },
    {
      name: "الرياضيات",
    },
    {
      name: "الجغرافيا",
    },
    {
      name: "التاريخ",
    },
    {
      name: "الفيزياء",
    },
    {
      name: "الكيمياء",
    },
    {
      name: "اللغه الاجنبيه الثانيه",
    },
    {
      name: "الفلسفه والمنطق",
    },
  ],
];
// ================================================================= //
// Variables
let container = document.querySelector(".table_model ul");
let userNameModel = document.querySelector(".model_username_h2");
let model = document.querySelector(".model_degree");
let main = document.querySelector("main");
let loading = document.querySelector(".loading");
let btn = document.querySelector("#btn");
let userName = document.querySelector("#username");
let section = document.querySelector(".container_section");
let select = document.querySelector("#select_option");
let errors = document.querySelectorAll(".error");

// ================================================================= //

// ================================================================= //
// add event lisitener
// ================================================================= //

code.addEventListener("input", check);
btn.addEventListener("click", btnFUN);

// ================================================================= //
// add event lisitener
// ================================================================= //

// ================================================================= //
// functions
// ================================================================= //
function drawDgree(opjItem) {
  opjItem.map((item) => {
    let content = function () {

      return `
      <li>
          <span class="supject">${item.name}</span>
          <div class="degree">
            <div class="item">
                <span class="span-1"></span>
                <span class="span-2"></span>
                <span class="span-3"></span>
                <span class="span-4">
                  <span class="black_ball" style="left:${Math.floor(Math.random() * 70) + 30}%; "></span>
                </span>
            </div>
          </div>
      </li>`;
    };
    container.innerHTML += content();
  });
}

function check() {
  if (code.value.slice(0, 2) == 44) {
    select.style.display = "unset";
  } else {
    select.style.display = "none";
  }
  if (code.value.length == 9) {
    code.blur();
  }
}

function btnFUN() {
  let arrUserNameValue = userName.value.split(" ");
  let filter_arrUserNameValue = arrUserNameValue.filter((item) => item !== "");
  let codeValue = code.value;
  let x = select.selectedIndex;
  if (filter_arrUserNameValue.length == 4 && codeValue.length == 9) {
    userNameModel.innerHTML = userName.value;
    if (code.value.slice(0, 2) == 44 || code.value.slice(0, 2) == 45) {
      if (code.value.slice(0, 2) == 44) {
        console.log(x);
        drawDgree(material[x]);
      } else {
        if (code.value.slice(0, 2) == 45) {
          x = 2;
          select.remove();
          drawDgree(material[x]);
        } else {
          errors[1].classList.add("show");
        }
      }
      main.remove();
      loading.style.display = "flex";
      setTimeout(() => {
        loading.style.display = "none";
        model.style.display = "flex";
      }, 3000);
    } else {
      errors[1].classList.add("show");
    }
  } else {
    errors.forEach((error) => {
      if (filter_arrUserNameValue.length !== 4) {
        errors[0].classList.add("show");
      } else {
        errors[0].classList.remove("show");
      }
      if (codeValue.length !== 9) {
        errors[1].classList.add("show");
      } else {
        errors[1].classList.remove("show");
      }
    });
  }
}

// ================================================================= //
// functions
// ================================================================= //
