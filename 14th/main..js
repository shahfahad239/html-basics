const form = document.querySelector("form");
const input = form.todo;
const ul = document.querySelector("ul");
const message = document.querySelector("#message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (input.value) {
    message.style.display = "none";
    const li = document.createElement("li");
    li.innerHTML = input.value;
    const button = document.createElement("button");
    button.innerHTML = "Delete";
    li.append(button);
    button.addEventListener("click", function () {
      ul.removeChild(li);
    });
    ul.append(li);
    input.value = "";
  }
});
