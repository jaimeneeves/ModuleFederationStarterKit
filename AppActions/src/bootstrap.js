import('./index').then(({AppActions}) => {
  AppActions(document.querySelector(`#actions`));
})