const footerComponent = (() => {
  const init = async (name) => {
    const template = await $.get('components/footer/footer.hbs');
    const templateScript = Handlebars.compile(template);

    const context = {
      name: name,
    };

    const html = templateScript(context);

    $('footer').replaceWith(html);
  };

  return {
    init: init,
  };
})();

export default footerComponent;
