document.addEventListener("DOMContentLoaded", () => {
  const genBtn = document.querySelector("#genBtn");
  const clearBtn = document.querySelector("#clearBtn");
  const input = document.querySelector("#password");
  const copy = document.querySelector(".fa-copy ");
  const copied = document.querySelector("#copied");
  const message = document.querySelector("#message");

  genBtn.addEventListener("click", () => {
    genpass();
  });

  copy.addEventListener("click", () => {
    copypass();
  });
  clearBtn.addEventListener("click", () => {
    input.value = "";
  });

  //   generate pass function
  function genpass() {
    const chars = `abcdefghijklmnopqrstuvwxyz&*()+0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^`;

    let pass = "";
    for (let i = 0; i < 14; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      pass += chars.substring(randomIndex, randomIndex + 1);
      console.log(pass);
    }
    input.value = pass;
  }

  //   copy pass to clipboard function

  function copypass() {
    const value = input.value.trim();
    // input.select();

    if (value == "") {
      message.innerHTML = "Please Generate Password";
    } else {
      input.setSelectionRange(0, 999);
      navigator.clipboard.writeText(input.value);
      message.innerHTML = "Password Copied";
    }

    // display message
    copied.style.display = "block";
    setTimeout(() => {
      copied.style.display = "none";
    }, 3000);
  }
});
