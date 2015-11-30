//Goal: Implement AJAX to provide user functionality to manage routine tasks across different websites.


//Variables Section//

var categoryInput = document.getElementById("category-name"); //for new category
var submitButton = document.getElementById("submit"); //for submitting info or data

//Functions Section//

// Logging in
var login = function() {
	//ask user to enter username and password
	//check username and password against database
	if (username === match && password === match) {
		//fetch their information
		//display site
	} else {
		//throw errors depending on what doesn't match
		//give option to reset username and password
	}
}

//Give user option to remember their username next time they access the app
	//display checkbox on login
var rememberUserName = function() {
	//track cookies for username
}

//Add a user to the database, with username and password, and optional personal details
//Only run this code if the user selects to create an account from the log-in popup
if (createAccount = true) {
	var userName = prompt("Please enter a username.");
	var password = prompt("Please choose a password.");
	var userFirstName = prompt("Please enter your first name.");
	//submit info to database of users
	//display success popups
}

//Add and edit categories
var categoryAdd = function() {
	var categoryName = //give user text input for category name
	var categoryColor = //allow user to choose color for their category box
	//create new custom category
	//save changes
}
var categoryEdit = function() {
	var categoryName = //give user text input to edit category name
	var categoryColor = //allow user to choose a new color for the category box
	//save changes
}

//ONLY FOR BROWSERS THAT DO NOT HAVE NATIVE HTML5 DRAG AND DROP SUPPORT 
//Drag and drop categories and icons inside the content page, including ability to delete a category/icon by dragging to a trash can symbol
var iconDrag = function() {
	//start drag process on mouse click event
	//finish drag process on mouse click event
}
var iconPlace = function() {
	//iconDrag()
	//save location change
}
var iconDelete = function() {
	//iconDrag()
	//when icon is placed on trash can symbol, delete
	//give user confirmation popup to make sure they want to delete
	//if yes, success message
	//otherwise, no message is displayed and no changes are made to the page
}

//Create useful widgets for displaying data in the sidebar
var widgetDisplay = function() {
	//allow user to choose which info from that category to display
	//gather data from relevant category
	//display in sidebar
}
//for widget drag, place, and delete, use relevant icon functions

//Change the page (without refreshing) to display different content. For example, from the main categories page to the Health page.
var changePage = function() {
	//AJAX
}

//Wiring Section//

//Create a log-in popup if the user is not already logged in
if (login === false) {
	//ask user to enter username and password (login function)
	//or create a new account (createAccount function)
}

    
//DRAG AND DROP STUFF//

var dragSrcEl = null;

function handleDragStart(e) {
  // Target (this) element is the source node.
  

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}
    

    
function handleDrop(e) {
  // this/e.target is current target element.

  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }

  // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl != this) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}
    
function handleDragEnd(e) {
  // this/e.target is the source node.

  [].forEach.call(cols, function (col) {
    col.classList.remove('over');
  });
}    
    
var cols = document.querySelectorAll('#categories .category-container');
[].forEach.call(cols, function(col) {
  col.addEventListener('dragstart', handleDragStart, false);
  col.addEventListener('drop', handleDrop, false);
  col.addEventListener('dragend', handleDragEnd, false);
});

