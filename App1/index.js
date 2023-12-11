import './style.css';
import PersonHTML from './person.html';

export const Avatar = (element) => {
  element.innerHTML = PersonHTML;
  return element;
}

Avatar(document.querySelector(`#person`));