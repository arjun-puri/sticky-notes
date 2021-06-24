import Note from '../note-2/note.js';
export default class NotesContainer {
  constructor() {}

  // private method
  #getTemplate() {
    return $.get('components/note-2-container/notes-container.hbs');
  }

  #addBtnLstn() {
    $('#addNoteBtn').on('click', this.#addBtn);
  }

  #addBtn() {
    const note = new Note();
    note.render();
  }

  async render() {
    const template = await this.#getTemplate();
    const templateScript = Handlebars.compile(template);
    const html = templateScript();
    $('main').append(html);
    // add event listener for addBtn
    this.#addBtnLstn();
  }
}
