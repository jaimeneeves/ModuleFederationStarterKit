import './style.css';
import AvatarImg from './avatar.png';

export const Avatar = (element) => {
  element.innerHTML = `
    <div class='person--avatar'>
      <img src='${AvatarImg}'>
    </div>
    <div class='person'>
      <div class='person--name'>Jaime Neves</div>
      <div class='person--user-id'>@jaimeneeves</div>
    <div>
    <div class='actions'>
      <div></div>
    </div>
  `;
  return element;
}

Avatar(document.querySelector(`#avatar`));