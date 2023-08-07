const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");

// Funkcija za dodavanje itema u listu
function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Alert - ako nema nista u 'Enter Item'
  if (newItem === "") {
    alert("Please add an item");
    return;
  }

  // Kreiranje itema u listi
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);

  // Add li to the DOM
  itemList.appendChild(li);

  checkUI();

  itemInput.value = "";
}

// Funkcija za kreiranje buttona
function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

// Funkcija za kreiranje ikonice 'x'
function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

// FUNKCIJE ZA BRISANJE ITEMA IZ LISTE
// Clearing the items with a 'x' button on list item
function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();

      checkUI();
    }
  }
}

// Clearing the items with a 'Clear All' button
function clearItems(e) {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  checkUI();
}

// Funkcija za nestajanje buttona 'Clear All' i 'Filter Items' kada nema itema u listi
function checkUI() {
  const items = itemList.querySelectorAll("li"); // Deklarise se ovdje - ne u global scope.u
  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilter.style.display = "block";
  }
}

// Event Listeners
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);

checkUI();
