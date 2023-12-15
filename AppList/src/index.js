import './style.css';

import IconPerson from './imagens/person-2.png'
import IconDetail from './imagens/detail-contact.png'
import IconPlusWhite from './imagens/plus-white.png'

/**
 * @param {HTMLElement} element 
 */
export const AppList = (element) => {
  element.innerHTML = `
    <div class='app-list'>
      <div class='list-item'>
        <div class="list--avatar">
          <img src="${IconPerson}" alt="">
        </div>
        <div class="list--contact">
          <div class="contact-name">Elisabeth Alanna</div>
          <div class="contact-username">@elisabeth</div>
        </div>
        <div class="list--contact-detail">
          <img src="${IconDetail}" alt="">
        </div>
      </div>

      <div class="list-item new">
        <div class="list--avatar">
          <img src="${IconPlusWhite}" alt="">
        </div>
        <div class="list--contact">
          <div class="contact-name">Novo Contato</div>
        </div>
        <div class="list--contact-detail">
          <img src="./assets/detail-contact.png" alt="">
        </div>
      </div>
    </div>
  `;
  return element;
}