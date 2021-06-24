export default class Note {
  constructor(text = '', color = 'yellow') {
    this.text = text;
    this.color = color;
  }

  #getTemplate() {
    return $.get('components/note-2/note.hbs');
  }

  #noteUpdateLstn(noteElm) {
    const textarea = noteElm.find('textarea');
    textarea.on('input', () => {
      this.text = textarea.val();
    });
  }

  #noteFocusLstn(noteElm) {
    noteElm.on('focusin', () => {
      noteElm.find('.note-toolbar').show(400);
    });
    noteElm.on('focusout', () => {
      noteElm.find('.note-toolbar').hide(400);
    });
  }

  #noteChangeColorLstn(noteElm) {
    noteElm.find('.note-toolbar__btn--chng-color').on('click', () => {
      const textarea = noteElm.find('textarea');
      // checking what is the active color of the textarea
      switch (textarea[0].classList[1]) {
        case 'note-yellow':
          textarea.removeClass('note-yellow');
          textarea.addClass('note-green');
          break;
        case 'note-green':
          textarea.removeClass('note-green');
          textarea.addClass('note-pink');
          break;
        case 'note-pink':
          textarea.removeClass('note-pink');
          textarea.addClass('note-yellow');
          break;
      }
    });
  }

  // currently only removing from DOM
  #noteDeleteLstn(noteElm) {
    noteElm.find('.note-toolbar__btn--delete').on('click', () => {
      noteElm.remove();
    });
  }

  async render() {
    const template = await this.#getTemplate();
    const templateScript = Handlebars.compile(template);
    const html = templateScript({ text: this.text, color: this.color });
    // rendering element in DOM
    $('#notesContainer').append(html);
    // adding event listeners
    const noteElm = $('.note:last-child');
    this.#noteUpdateLstn(noteElm);
    this.#noteFocusLstn(noteElm);
    this.#noteDeleteLstn(noteElm);
    this.#noteChangeColorLstn(noteElm);
  }
}
