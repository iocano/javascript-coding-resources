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

  // Open confirm box with the given message and await user answer.
  let msg = `Delete user with id '${userId}'?`;
  let response = await confirmBox.open(msg);

  // On cancel close the confirm box.
  if (!response) return await confirmBox.close();

  // After firs accept reuse the confirm box with the new question.
  msg = 'You must confirm. Continue?';
  response = await confirmBox.open(msg);

  // Perform the remove action if the user accepts.
  if (response) row.remove();

  // Closes confirm box.
  return await confirmBox.close();
}

// Add an event listener to each delete button
deleteButtons.forEach((button) => {
  button.addEventListener('click', deleteRow);
});
