# Student Management System

This is a web-based Student Management System that allows you to manage student records, advisors, and awards. The system provides various features for adding, editing, and deleting student records, 
as well as interactive UI elements for easy navigation.

## Functions

Here's a brief description of each function in the script:

### User Interface

- `changeBgColor(row)`: Changes the background color of a table row and adds edit/delete buttons.
- `addHeadings()`: Adds "EDIT" and "DELETE" headings to the table.
- `removeHeadings()`: Removes "EDIT" and "DELETE" headings from the table.
- `enableSubmit()`: Enables or disables the submit button based on checkbox selections.

### Student Record Management

- `addStudentRow()`: Adds a new student record to the table with auto-incremented student numbers.
- `deleteRowDetails(row)`: Deletes a student record and updates the UI.
- `openEditPopup(studentCount)`: Opens a modal pop-up for editing student details.
- `closeEditPopup(modal)`: Closes the modal pop-up for editing student details.

### Dropdown Functionality

- `openDropDown(rowDetails)`: Toggles the visibility of a dropdown row when the down arrow is clicked.
