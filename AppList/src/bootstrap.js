import('./index').then(({AppList}) => {
  AppList(document.querySelector('#app-list'));
});