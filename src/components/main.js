import NotesContainer from './note-2-container/notes-container.js';
import headerComponent from './header/header.js';
import footerComponent from './footer/footer.js';

$(document).ready(() => {
  headerComponent.init();
  // rendering the Notes Container
  const notesContainer = new NotesContainer();
  notesContainer.render();
  footerComponent.init('Arjun Puri');
});
