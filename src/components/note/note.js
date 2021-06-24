const noteComponent = (() => {
  const init = async () => {
    const template = await $.get('components/note/note.hbs');
    const templateScript = Handlebars.compile(template);

    const context = {
      notes: [
        { note: 'Kappa is lovely' },
        { note: 'Have a great day!' },
        { note: 'LOL!' },
      ],
    };
    const html = templateScript(context);

    $('main').append(html);
  };

  const addBtnLstn = () => {
    const btn = $('addNoteBtn');
    btn.on('click', addNote());
  };

  const addNote = () => {};

  return {
    init: init,
  };
})();

export default noteComponent;
