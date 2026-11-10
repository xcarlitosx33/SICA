
import "./StatCard.css";

function StatCard({
    title,
    value,
    description,
    status = "neutral",
    badge,
    detail
}) {
    return (
        <article className="stat-card">
            <div className="stat-card-header">
                <span className="stat-card-title">
                    {title}
                </span>

                <span
                    className={`stat-card-dot ${status}`}
                    aria-hidden="true"
                />
            </div>

            <strong className="stat-card-value">
                {value}
            </strong>

            <div className="stat-card-footer">
                {badge && (
                    <span className={`stat-card-badge ${status}`}>
                        {badge}
                    </span>
                )}

                {detail && (
                    <span className="stat-card-detail">
                        {detail}
                    </span>
                )}

                {description && (
                    <span className="stat-card-description">
                        {description}
                    </span>
                )}
            </div>
        </article>
    );
}

export default StatCard;
