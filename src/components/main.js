import Note from './note-2/note.js';
import NotesContainer from './note-2-container/notes-container.js';
import headerComponent from './header/header.js';
import footerComponent from './footer/footer.js';

$(document).ready(() => {
  headerComponent.init();
  // rendering the Notes Container
  const notesContainer = new NotesContainer();
  notesContainer.render();

  // rendering few notes
  // const note1 = new Note('kappa');
  // console.log(note1);
  // note1.render();

  footerComponent.init('Arjun Puri');
});
