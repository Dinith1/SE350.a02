function createTask() {
    // Get the New Task input values
    var select = document.getElementById("taskboard-select");
    var board = select.options[select.selectedIndex].text;
    board = board.replace(/ / ,"-");
    var name = document.getElementById("name-select").value;
    var effort = document.getElementById("effort-select").value;

    /* CREATE THE NEW TASK */
    // Outer Container (a)
    var newTask = document.createElement('a');
    newTask.href = "./whiteboard.html";
    newTask.style = "text-decoration:none;";

    // Inner Container (div)
    var newTaskContainer = document.createElement('div');
    newTaskContainer.className = "tasks";

    // Task Settings Top
    var newTaskSettingsTop = document.createElement('div');
    newTaskSettingsTop.className = "task-settings";
    // Task Name
    var newTaskSettingsTopName = document.createElement('div');
    newTaskSettingsTopName.className = "task-name";
    var n = document.createTextNode(name);
    newTaskSettingsTopName.appendChild(n);
    // Icon
    var newTaskSettingsTopIcon = document.createElement('div');
    newTaskSettingsTopIcon.className = "material-icons";
    newTaskSettingsTopIcon.id = "draggable";
    var n = document.createTextNode("more_horiz");
    newTaskSettingsTopIcon.appendChild(n);
    // Put Name and Icon into Task Settings Top
    newTaskSettingsTop.appendChild(newTaskSettingsTopName);
    newTaskSettingsTop.appendChild(newTaskSettingsTopIcon);

    // Task Settings Bottom
    var newTaskSettingsBottom = document.createElement('div');
    newTaskSettingsBottom.className = "task-settings";
    // Task Details
    var newTaskDetails = document.createElement('div');
    newTaskDetails.className = "task-details";
    // Logo
    var newTaskLogo = document.createElement('div');
    newTaskLogo.id = "logo";
    var logo = document.createElement('img');
    logo.className = "task-member-logo";
    logo.src = "./resources/dins.jpg";
    newTaskLogo.appendChild(logo);
    // Put Logo into Task Details
    newTaskDetails.appendChild(newTaskLogo);
    // Priority
    var newTaskPriority = document.createElement('div');
    newTaskPriority.className = "priority";
    var n = document.createTextNode(effort);
    newTaskPriority.appendChild(n);
    // Put Task Details and Prioroty into Task Settings Bottom
    newTaskSettingsBottom.appendChild(newTaskDetails);
    newTaskSettingsBottom.appendChild(newTaskPriority);

    // Put Top and Bottom Task Settings into Inner Container
    newTaskContainer.appendChild(newTaskSettingsTop);
    newTaskContainer.appendChild(newTaskSettingsBottom);

    // Put Inner Container into Outer Container
    newTask.appendChild(newTaskContainer);

    // Put New Task into the Task Board
    var parent = document.getElementById(board);
    parent.appendChild(newTask);

}