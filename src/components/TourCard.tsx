import { Link } from 'react-router-dom';

interface TourCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: readonly string[];
}

export default function TourCard({
  slug,
  title,
  description,
  image,
  imageAlt,
  highlights,
}: TourCardProps) {
  return (
    <article className="card">
      <img src={image} alt={imageAlt} className="card__image" loading="lazy" width={400} height={250} />
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p>{description}</p>
        <div className="card__tags">
          {highlights.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="btn-group">
          <Link to={`/${slug}`} className="btn btn--primary">
            View This Bimini Tour
          </Link>
        </div>
      </div>
    </article>
  );
}
