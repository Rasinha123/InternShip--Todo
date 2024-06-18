document.getElementById('addNew-btn').addEventListener('click',addItem);
let inputCount = 0;
function addItem(){    
    const input = document.getElementById('inputNew-item');
    const itemText = input.value.trim();

    if (itemText === "") {
        alert("Please enter a Todo List.");
        return;
    }

    const itemContainer = document.getElementById('item-container');
    const newItem = document.createElement('div');
    newItem.className = 'list-group-item';
    newItem.id = 'textAdd';


    newItem.innerHTML = `<span class="todoList">${itemText}</span><button class="remove-btn" onClick="removeItem(this)"> Delete</button>`;

    itemContainer.appendChild(newItem);
    input.value = "";
    input.focus();   
   
}

function removeItem(button) {
    const item = button.parentNode;
    const skillText = item.querySelector('span').innerText;
    item.remove();
  
}
