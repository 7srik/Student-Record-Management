//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

var tableRows = document.getElementsByTagName("tr");

const thElement1 = document.createElement("th");
thElement1.innerHTML = "EDIT";
const thElement2 = document.createElement("th");
thElement2.innerHTML = "DELETE";

function changeBgColor(row) {
  this.enableSubmit();
  var selectedRow = row.parentNode.parentNode;
  var bgColor = selectedRow.style.backgroundColor;

  const tdDeleteButton = document.createElement("td");
  tdDeleteButton.innerHTML =
    '<button onClick="deleteRowDetails(this)">Delete</button>';

  const tdEditButton = document.createElement("td");
  tdEditButton.innerHTML = '<button onClick="openEditPopup()">Edit</button>';
  if (bgColor == "yellow") {
    selectedRow.style.backgroundColor = "";
    var employeeTable = document.getElementById('myTable');
    employeeTable.rows[selectedRow.rowIndex].deleteCell(8);
    employeeTable.rows[selectedRow.rowIndex].deleteCell(8);
  } 
  else {
    selectedRow.style.backgroundColor = "yellow";
    this.addHeadings();
    selectedRow.appendChild(tdEditButton);
    selectedRow.appendChild(tdDeleteButton);
  }
}
function addHeadings() {
  tableRows[0].appendChild(thElement1);
  tableRows[0].appendChild(thElement2);
}
function removeHeadings() {
  tableRows[0].removeChild(thElement1);
  tableRows[0].removeChild(thElement2);
}
function addStudentRow() {
  var highestStudentNumber = 0;
  var tableRows = document.getElementsByTagName("tr");
  for (var i = 1; i < tableRows.length; i += 2) { // Start from index 1 and skip every other row (dropdown)
    var studentCell = tableRows[i].getElementsByTagName("td")[1];
    if (studentCell) {
      var studentNumber = parseInt(studentCell.textContent.split(" ")[1]);
      if (!isNaN(studentNumber) && studentNumber > highestStudentNumber) {
        highestStudentNumber = studentNumber;
      }
    }
  }
  var count = highestStudentNumber + 1;
  let table = document.getElementById("myTable"); 
  let row = document.createElement("tr");
  let cell1 = document.createElement("td");
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checkBoxClass");
  checkbox.setAttribute("onclick", "changeBgColor(this)");
  cell1.appendChild(checkbox);
  let dynamicText = 'openDropDown(this)';
  let downArrow = document.createElement("img");
  downArrow.setAttribute("src", "down.png");
  downArrow.setAttribute("width", "25px");
  downArrow.setAttribute("onclick",dynamicText);
  cell1.appendChild(downArrow);
  let breakLine = document.createElement("br");
  cell1.insertBefore(breakLine, downArrow);
  row.appendChild(cell1);
  studentCell = document.createElement("td");
  studentCell.innerHTML = "Student " + count;
  row.appendChild(studentCell);
  advisorCell = document.createElement("td");
  advisorCell.innerHTML = "Teacher " + count;
  row.appendChild(advisorCell);
  awardCell = document.createElement("td");
  awardCell.innerHTML = "Approved";
  row.appendChild(awardCell);
  semesterCell = document.createElement("td");
  semesterCell.innerHTML = "Fall";
  row.appendChild(semesterCell);
  typeCell = document.createElement("td");
  typeCell.innerHTML = "TA";
  row.appendChild(typeCell);
  minBudget = 1;
  maxBudget = 99999;
  const randomBudget = Math.floor(Math.random() * (maxBudget - minBudget + 1)) + minBudget;
  budgetCell = document.createElement("td");
  budgetCell.innerHTML = randomBudget;
  row.appendChild(budgetCell);
  pecentMin = 0;
  percentMax = 100;
  const randomPercentage = Math.floor(Math.random() * (percentMax - pecentMin + 1)) + pecentMin;
  let percentCell = document.createElement("td");
  percentCell.innerHTML = randomPercentage + "%";
  row.appendChild(percentCell);
  table.appendChild(row);
  let row2 = document.createElement("tr");
  row2.setAttribute('class','dropDownTextArea');
  row2.style.visibility = 'collapse';
  let cellText = document.createElement('td');
  cellText.setAttribute("colspan",8);
  cellText.innerHTML = 'Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />';
  row2.appendChild(cellText);
  table.appendChild(row2);
  alert('Student ' + count + ' Record added successfully!');
}
function openDropDown(rowDetails){
  var row = (rowDetails.parentNode.parentNode.rowIndex+1)/2-1;
  console.log(document.getElementById('myTable')[1]);
  console.log(row);
  var x = document.getElementsByClassName("dropDownTextArea");
  if (x[row].style.visibility == "collapse" || x[row].style.visibility == "") {
    x[row].style.visibility = "visible";
  } else {
    x[row].style.visibility = "collapse";
  }
}

function deleteRowDetails(row){
  var employeeTable = document.getElementById('myTable');
  var rowNum = row.parentNode.parentNode.rowIndex;
  console.log(rowNum);
  employeeTable.deleteRow(rowNum+1);
  employeeTable.deleteRow(rowNum);
  var studentCount = (rowNum+1)/2;
  alert('Student ' + studentCount + ' Record deleted successfully!');
  enableSubmit();
}
function enableSubmit(){
  var enableButton = false;
  var checkList = document.getElementsByClassName('checkBoxClass');
  for(let i=0;i<checkList.length;i++){
    if(checkList[i].checked){
      enableButton = true;
      break;
    }
  }
  if(enableButton) {
    document.getElementById('submitButton').disabled = false;
    document.getElementById('submitButton').style.background = 'orange';
    document.getElementById('submitButton').style.color = 'white';
}
  else {
    this.removeHeadings();
    document.getElementById('submitButton').disabled = true;
    document.getElementById('submitButton').style.background = '';
    document.getElementById('submitButton').style.color = 'gray';
  }
}

function openEditPopup(studentCount) {
  // Create the modal dialog
  var modal = document.createElement("div");
  modal.className = "modal";
  
  // Create the modal content
  var modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  // Set the title of the edit pop-up
  var title = document.createElement("h2");
  title.textContent = "Edit details of Student " + studentCount;
  modalContent.appendChild(title);

  // Create text elements for student details
  var studentDetails = document.createElement("p");
  studentDetails.textContent = "Student Name: Student " + studentCount + "\n" +
                               "Advisor: Teacher " + studentCount + "\n" +
                               "Award Status: Approved\n" +
                               "Semester: Fall\n" +
                               "Type: TA\n" +
                               "Budget Number: RandomValue\n" +
                               "Percentage: RandomPercentage%";
  modalContent.appendChild(studentDetails);

  // Create "Update" and "Cancel" buttons
  var updateButton = document.createElement("button");
  updateButton.textContent = "Update";
  updateButton.onclick = function() {
    // Handle the "Update" button action
    alert('Student ' + studentCount + ' data updated successfully!');
    closeEditPopup(modal);
  };
  modalContent.appendChild(updateButton);

  var cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.onclick = function() {
    // Handle the "Cancel" button action
    closeEditPopup(modal);
  };
  modalContent.appendChild(cancelButton);

  // Append the modal content to the modal dialog
  modal.appendChild(modalContent);

  // Append the modal dialog to the document
  document.body.appendChild(modal);
}

function closeEditPopup(modal) {
  // Close the modal dialog by removing it from the document
  document.body.removeChild(modal);
}