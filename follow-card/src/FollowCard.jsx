import React from 'react';
import './FollowCard.css';

export function FollowCard({ username, name, isFollowing: initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = React.useState(initialIsFollowing);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const buttonClassName = isFollowing
    ? 'yq-followCard-button is-following'
    : 'yq-followCard-button';

  const buttonText = isFollowing ? 'Siguiendo' : 'Seguir';

  return (
    <article className="yq-followCard">
      <header className="yq-followCard-header">
        <img
          className="yq-followCard-avatar"
          alt={`Avatar de ${username}`}
          src={`https://unavatar.io/github/${username}`}
        />
        <div className="yq-followCard-info">
          <strong>{name}</strong>
          <span className="yq-followCard-infoUserName">@{username}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="yq-followCard-text">{buttonText}</span>
        </button>
      </aside>
    </article>
  );
}
