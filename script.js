

const inputbox = document.querySelector(".inputbox input");
const add = document.querySelector("#addbutton");
const todolist = document.querySelector(".itemlist");
const pendingTasks = document.querySelector(".pendingTasks");
const clearall = document.querySelector(".clearall");

// to change visibility of add task button
inputbox.onkeyup = () => {
    let UserEnterValue = inputbox.value;//get the value in variable
    if (UserEnterValue.trim() != 0) {//if some string no spaces
        add.style.display = "block"; //make button visible
    }
    else {
        add.style.display = "none";//add task button is hidden
    }
}

var item = [];
//used Onclick Event to add tasks in the variable declared 
add.onclick = () => {
    item.push(inputbox.value)//Item Add In Array
    showcase(); // after adding all tasks will be showed.
}

// Showcase function display all the added task
function showcase() {
    let ListTag = "";
    item.forEach((element, index) => {
        ListTag += `<li>
                         <label class="box">
                            <input class="checkinput" type="checkbox">
                                ${element}
                        </label>
                        <span class="icon">
                            <img class="img1" src="cross.png" onclick="deleteTask(${index})">
                        <span>
                    </li>`;
    });
    todolist.innerHTML = ListTag; //adding new li tag inside ul tag
    inputbox.value = ""; //once task added the input field blank
    add.style.display = "none";//Add button hide
    pendingTasks.textContent = item.length;//For toal left task counting
}

// Delete task function is used to remove the task from the list
function deleteTask(index) {
    item.splice(index, 1);//remove element from array 
    showcase();
}
// delete all tasks function is used for delete all task from your list
clearall.onclick = () => {
    item = []; //empty the array
    showcase();
}

// Clear Completed is used for which task complete delete from list.
document.querySelector('.clearcomtask').onclick = () => {
    var inputElems = document.querySelectorAll(".checkinput"); // Select selected task in list
    var temp = [] // cretae  new arr for store completed task
    for (var i = 0; i < item.length; i++) {
        if (inputElems[i].checked === true) {
            temp.push(item[i]);
        }
    }
    var j = 0;
    for (i = 0; i < item.length; i++) {
        if (item[i] === temp[j]) {
            item.splice(i, 1);//if task store in temp array than remove from item array
            j++; //next element in temp array
            i--; //to make array index dont get out of bounds
        }
    }
    showcase();
}

// mark all tasks
document.querySelector('.complete').onclick = () => {
    checked(true);
}
//Unmark all tasks
document.querySelector('.uncomplete').onclick = () => {
    checked(false);
}
//function to mark and unmark all task
function checked(params) {
    var inputElems = document.querySelectorAll(".checkinput"); // Select selected task in list
    for (var i = 0; i < item.length; i++) {
        if (params == true) {
            inputElems[i].checked = true;
        }
        else {
            inputElems[i].checked = false;
        }
    }
}