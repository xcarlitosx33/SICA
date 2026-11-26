
import "./PageHeader.css";

function PageHeader({ eyebrow, title, description, icon }) {
    return (
        <header className="page-header">
            <div className="page-header-content">
                {eyebrow && (
                    <span className="page-header-eyebrow">
                        {eyebrow}
                    </span>
                )}

                <h1>{title}</h1>

                {description && (
                    <p>{description}</p>
                )}
            </div>

            {icon && (
                <div className="page-header-icon">
                    {icon}
                </div>
            )}
        </header>
    );
}

export default PageHeader;
