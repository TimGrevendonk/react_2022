export default function NewsItem({ post }) {
  var cardStyle = {
    height: 500,
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="card-divider">{post.title}</div>
      <a href={post.url} target="_blank" rel="noreferrer">
        <img src={post.image_url} alt={post.title} />
      </a>
      <div className="card-section">
        <p>{post.abstract}</p>
      </div>
    </div>
  );
}
