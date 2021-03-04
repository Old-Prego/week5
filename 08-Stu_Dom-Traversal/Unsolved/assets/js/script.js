// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, select all the boxes and turn them white in a single statement.
// HINT: Use the `.css` function to change element's background color
// rootEl.closest('ul').children('li').addClass('whiteBR').css("background-color","white");
rootEl.children('ul').children('li').addClass("whiteBR").css("background-color", "white");
// TODO: Starting from `rootEl`, what is the statement that will use "O" to block the "X" from winning
// HINT: Use the `.closest()`, or `.parent()` methods to go up the DOM tree
rootEl.children('ul').eq(2).children().eq(0).text('O');
// TODO: Starting from the bottom row, middle square or `.item-b3`, what is the statement that will win the game using "O"
// HINT: Use the ".closest()", or ".parent()" methods to go up the DOM tree
$(".item-b3").parent().siblings().children().eq(0).text('O');