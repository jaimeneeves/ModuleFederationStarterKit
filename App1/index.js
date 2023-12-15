import './style.css';
import PersonHTML from './person.html';

export const Person = (element) => {
  element.innerHTML = PersonHTML;
  return element;
}

Person(document.querySelector(`#person`));