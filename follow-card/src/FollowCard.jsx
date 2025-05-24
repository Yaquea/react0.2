import './FollowCard.css';

export function FollowCard({username, name, isFollowing}) {
  return (
    <article className="yq-followCard">
      <header className="yq-followCard-header">
        <img
          className="yq-followCard-img"
          alt="Avatar"
          src={`https://unavatar.io/github/${username}`}
        />
        <div className="yq-followCard-info">
          <strong className="yq-followCard-info-name">
            {name} 
          </strong>
          <span>@{username} </span>
        </div>
      </header>
      <aside>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="yq-followCard-a"
        >
          <button className="yq-followCard-button">Follow</button>
        </a>
      </aside>
    </article>
  );
}
