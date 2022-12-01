// making changes to see if they properly push to github
// create global variables and const
const nonImportantIcon = "fa-solid fa-hippo";
const importantIcon = "fa-solid fa-star";
var isImportant = false;
var isVisible = true;

function toggleImportant() {
  if (isImportant) {
    //to non important
    $("#topIcon").removeClass(importantIcon);
    $("#topIcon").addClass(nonImportantIcon);
    isImportant = false;
  } else {
    //to important
    $("#topIcon").removeClass(nonImportantIcon);
    $("#topIcon").addClass(importantIcon);
    isImportant = true;
  }
}

function saveTask() {
  console.log("Saving Task!");
  let title = $("#txtTitle").val();
  let description = $("#txtDescription").val();
  let dueDate = $("#txtDate").val();
  let category = $("#selCategory").val();
  let priority = $("#txtPriority").val();
  let cost = $("#txtCost").val();

  //create a new instance of Task (object)
  let task = new Task(
    isImportant,
    title,
    description,
    dueDate,
    category,
    priority,
    cost
  );
  console.log(task);
  displayTask(task);
}
function displayTask(task) {
  let syntax = `<div class="task">
  <i class="fa-solid fa-hippo topIcon"></i>
</div>

  <div class= "description" >
  <h5>${task.title}</h5>
  <p>${task.description}</p>
  </div>

  <label>${task.dueDate}</label>
  <label>${task.category}</label>
  <label>${task.cost}</label>

  </div> `; //html code

  $("#pendingTasks").append(syntax);
}

function toggleDetails() {
  //   console.log("Hide/Show");
  if (isVisible) {
    $("#secForm").hide();
    isVisible = false;
  } else {
    $("#secForm").show();
    isVisible = true;
  }
}

function init() {
  console.log("Task Manager");

  $("#topIcon").click(toggleImportant);
  $("#btnSave").click(saveTask);
  $("#btnToggleDetails").click(toggleDetails);
}

window.onload = init;

// /**console log a message when the user clicks on teh icon,
//  * add an id to the icon
//  * cath teh click event on the icon (on init fn),
//  * when the icon is clicked, call a fn named togggleImportant
//  * in toggleImportant console log any message *
//  *
//  * investigation homework - read about git and github
