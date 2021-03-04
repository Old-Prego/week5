var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var shoppingInput = $('input[name="shopping-input"]');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

// TODO: Add an event listener to the `shoppingFormEl` to handle submission

function handleShoppingSubmit(event){
    event.preventDefault();

    var newItem = $("<li>");

    newItem.text(shoppingInput.val());

    shoppingListEl.append(newItem);
}

shoppingFormEl.on('submit',handleShoppingSubmit);