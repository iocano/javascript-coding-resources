import CustomHTMLElement from '../../../HTML/CustomHTMLElement.js';
import ModalWindow from './../../ModalWindow.js';


// Instantiate ModalWindow with modal id.
const modal = new ModalWindow('modal1');

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
