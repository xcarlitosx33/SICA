
import "./IconStatCard.css";

function IconStatCard({
    title,
    value,
    description,
    icon,
    status = "neutral"
}) {
    return (
        <article className="icon-stat-card">
            <span className={`icon-stat-dot ${status}`} />

            <span className={`icon-stat-symbol ${status}`}>
                {icon}
            </span>

            <div className="icon-stat-info">
                <p>{title}</p>
                <strong>{value}</strong>
                <small>{description}</small>
            </div>
        </article>
    );
}

export default IconStatCard;
