let item = document.querySelector("#item");
let toDoBox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addTodo(this.value);
    this.value = "";
  }
});

const addTodo = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    ${item}
    <i class="fas fa-times"></i>
    `;

  listItem.addEventListener("click", function () {
    this.classList.toggle("demo");
  });

  listItem
    .querySelector(".fas.fa-times")
    .addEventListener("click", function () {
      listItem.remove();
    });
  toDoBox.appendChild(listItem);
};
