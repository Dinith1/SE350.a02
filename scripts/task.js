var contributorList = {
    hong: false,
    vee: false,
    allen: false,
    rich: false,
    dins: false
}

function createTask() {
    // Get the New Task input values
    var select = document.getElementById("taskboard-select");
    var board = select.options[select.selectedIndex].text;
    board = board.replace(/ /, "-");
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

    if (contributorList.hong) {
        var logo = document.createElement('img');
        logo.className = "task-member-logo";
        logo.src = "./resources/hong.jpg";
        newTaskLogo.appendChild(logo);
    }

    if (contributorList.vee) {
        var logo = document.createElement('img');
        logo.className = "task-member-logo";
        logo.src = "./resources/vee.jpg";
        newTaskLogo.appendChild(logo);
    }

    if (contributorList.allen) {
        var logo = document.createElement('img');
        logo.className = "task-member-logo";
        logo.src = "./resources/allen.jpg";
        newTaskLogo.appendChild(logo);
    }

    if (contributorList.rich) {
        var logo = document.createElement('img');
        logo.className = "task-member-logo";
        logo.src = "./resources/richard.jpg";
        newTaskLogo.appendChild(logo);
    }

    if (contributorList.dins) {
        var logo = document.createElement('img');
        logo.className = "task-member-logo";
        logo.src = "./resources/dins.jpg";
        newTaskLogo.appendChild(logo);
    }

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

function clearForm() {
    contributorList = {
        hong: false,
        vee: false,
        allen: false,
        rich: false,
        dins: false
    };
    document.getElementById("name-select").value = "";
    document.getElementById("description-select").value = "";
    document.getElementById("effort-select").value = "";
    document.getElementById("deadline-select").value = "";
    document.getElementById("modal-contributor-list").innerHTML = '';
}

function addContributor() {
    var key = window.event.keyCode;

    // If the user has pressed enter
    if (key === 13) {
        var addCon = false;
        var con = document.getElementById("contributor-select");
        var conText = con.value;

        // For creating a contributor image
        var newCon = document.createElement('div');
        newCon.id = "logo";
        var newConImg = document.createElement('img');
        newConImg.className = "member-logo";

        if (conText === "Hong Shi") {
            if (!contributorList.hong) {
                contributorList.hong = true;
                newConImg.src = "./resources/hong.jpg";
                addCon = true;
            }

        } else if (conText === "Vanessa Ciputra") {
            if (!contributorList.vee) {
                contributorList.vee = true;
                newConImg.src = "./resources/vee.jpg";
                addCon = true;
            }

        } else if (conText === "Allen Nian") {
            if (!contributorList.allen) {
                contributorList.allen = true;
                newConImg.src = "./resources/allen.jpg";
                addCon = true;
            }

        } else if (conText === "Richard Ng") {
            if (!contributorList.rich) {
                contributorList.rich = true;
                newConImg.src = "./resources/richard.jpg";
                addCon = true;
            }

        } else if (conText === "Dinith Wannigama") {
            if (!contributorList.dins) {
                contributorList.dins = true;
                newConImg.src = "./resources/dins.jpg";
                addCon = true;
            }
        } else {
            con.value = "Invalid Name";
            con.style.color = "red";
            return false;
        }

        con.value = "";
        if (addCon) {
            newCon.appendChild(newConImg);
            var conList = document.getElementById("modal-contributor-list");
            conList.appendChild(newCon);
        }
        return false;
    }
    else {
        var con = document.getElementById("contributor-select");
        con.style.color = "black";
        return true;
    }
}