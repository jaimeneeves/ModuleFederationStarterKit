import './style.css';

import IconTelefone from './images/icon-telefone.png';
import IconVideo from './images/icon-video.png';
import IconPontos from './images/icon-pontos.png';

export const AppActions = (element) => {
  element.innerHTML = `
    <div class='actions'>
      <div><img src='${IconTelefone}'></div>
      <div><img src='${IconVideo}'></div>
      <div><img src='${IconPontos}'></div>
    </div>
  `;
  return element;
}