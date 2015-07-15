angular
  .module('myapp', [
    'ngNewRouter',
  ])

.config(function ($componentLoaderProvider) {
  $componentLoaderProvider.setTemplateMapping(function (name) {
    // name is component name
    return name + '.tpl.html';
  });
  $componentLoaderProvider.setCtrlNameMapping(function (name) {
      // name is component name
      name = name.charAt(0).toUpperCase() + name.slice(1);
      return name + 'Controller';
  })
})