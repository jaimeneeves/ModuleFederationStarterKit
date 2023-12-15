import './style.css';
import PersonHTML from './person.html';

export const AppPerson = (element) => {
  element.innerHTML = PersonHTML;
  return element;
}

AppPerson(document.querySelector(`#person`));