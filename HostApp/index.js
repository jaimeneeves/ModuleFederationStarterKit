import('App1/Module').then(({AppPerson}) => {
  AppPerson(document.querySelector(`#person`))
});

import('AppA/Module').then(({AppActions}) => {
  AppActions(document.querySelector(`#content-actions`))
});