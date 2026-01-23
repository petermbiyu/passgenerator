document.addEventListener("DOMContentLoaded", () => {
  const genBtn = document.querySelector("#genBtn");
  const clearBtn = document.querySelector("#clearBtn");
  const input = document.querySelector("#password");
  const copy = document.querySelector(".fa-copy ");

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
    input.value.trim();
    input.select();
    input.setSelectionRange(0, 999);
    navigator.clipboard.writeText(input.value);
  }
});
