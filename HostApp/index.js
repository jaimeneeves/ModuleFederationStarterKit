import('App1/Module').then(({Person}) => {
  Person(document.querySelector(`#person`))
});