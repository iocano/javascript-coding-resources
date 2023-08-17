import CustomHTMLElement from '../../../HTML/CustomHTMLElement.js';
import ModalWindow from './../../ModalWindow.js';

// creating dynamic content
const content = CustomHTMLElement.create('div', {id: 'modal1'})
  .appendNewElement('label', { innerHTML: 'User:', htmlFor: 'user'})
  .appendNewElement('input', { id: 'user' })
  .appendNewElement('br')
  .appendNewElement('label', { innerText: 'Pass:', htmlFor: 'pass'})
  .appendNewElement('input', { id: 'pass' })
  .appendNewElement('button', { id: 'close-modal', innerHTML: 'Close' });

// Instantiate ModalWindow
const modal = new ModalWindow().setContent(content);

// Retrieve button to show modal.
const openModalBtn = CustomHTMLElement.getById('open-modal');
openModalBtn.addEventListener('click', async () => {
  try {
    // Open modal window.
    await modal.open();

    // Close modal window.
    const handler = async () => await modal.close();
    const options = { once: true };
    const closeModalBtn = CustomHTMLElement.getById('close-modal');
    closeModalBtn.addEventListener('click', handler, options);
  } catch (e) {
    // Log possible errors.
    console.log(e);
  }
});
