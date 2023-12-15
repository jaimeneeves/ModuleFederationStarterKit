import('App1/Module').then(({AppPerson}) => {
  AppPerson(document.querySelector(`#person`))
});