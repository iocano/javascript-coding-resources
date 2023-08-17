/* eslint-disable require-jsdoc */
import ModalWindow from '../../../ModalWindow/ModalWindow.js';
import ConfirmBox from '../../ConfirmBox.js';

// Add Modal and ConfirmBox styles in html file.

// Create instance ModalWindow instance.
const modal = new ModalWindow();

// Create instance of ConfirmBox instance.
const confirmBox = new ConfirmBox(modal);

// Get all anchor elements.
const deleteButtons = document.querySelectorAll('a');

async function deleteRow(event) {
  event.preventDefault();
  const button = event.target;
  const row = button.closest('tr');
  const userId = button.dataset.userId;

  const msg =
    'Are you sure you want to delete the user with the id ' + `'${userId}'?`;
  const response = await confirmBox.open(msg);
  if (response) {
    row.remove();
  }
  await confirmBox.close();
}

// Add an event listener to each delete button
deleteButtons.forEach((button) => {
  button.addEventListener('click', deleteRow);
});
