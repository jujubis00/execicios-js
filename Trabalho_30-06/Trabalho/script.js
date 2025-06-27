const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const shoppingList = document.getElementById("shoppingList");

// Carrega a lista do localStorage
window.onload = () => {
  const savedItems = JSON.parse(localStorage.getItem("shoppingList")) || [];
  savedItems.forEach(item => {
    addItemToDOM(item.text, item.comprado);
  });
};

addBtn.addEventListener("click", () => {
  const itemText = itemInput.value.trim();
  if (itemText !== "") {
    addItemToDOM(itemText, false);
    saveToLocalStorage();
    itemInput.value = "";
  }
});

function addItemToDOM(text, comprado) {
  const li = document.createElement("li");
  li.textContent = text;

  if (comprado) li.classList.add("comprado");

  li.addEventListener("click", () => {
    li.classList.toggle("comprado");
    saveToLocalStorage();
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.classList.add("remove-btn");

  removeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
    saveToLocalStorage();
  });

  li.appendChild(removeBtn);
  shoppingList.appendChild(li);
}

function saveToLocalStorage() {
  const items = [];
  shoppingList.querySelectorAll("li").forEach(li => {
    const text = li.firstChild.textContent;
    const comprado = li.classList.contains("comprado");
    items.push({ text, comprado });
  });
  localStorage.setItem("shoppingList", JSON.stringify(items));
}
