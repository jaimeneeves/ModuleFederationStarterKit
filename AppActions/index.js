export const AppActions = (element) => {
  element.innerHTML = `
    <div class='actions'>
      <div>Icon Telefone</div>
      <div>Icon Vídeo</div>
      <div>Icon Pontos</div>
    </div>
  `;
  return element;
}

AppActions(document.querySelector(`#actions`));