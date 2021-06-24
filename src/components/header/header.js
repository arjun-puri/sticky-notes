const headerComponent = (() => {
  const init = async () => {
    const template = await $.get('components/header/header.hbs');
    const templateScript = Handlebars.compile(template);

    $('header').replaceWith(templateScript);
  };

  return {
    init: init,
  };
})();

export default headerComponent;
