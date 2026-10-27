
import "./PageHeader.css";
import Notifications from "../Notifications/Notifications";

function PageHeader({ title, description }) {
    return (
        <header className="page-header">
            <div className="page-header-content">
                <h1>{title}</h1>

                {description && (
                    <p>{description}</p>
                )}
            </div>

            <Notifications />
        </header>
    );
}

export default PageHeader;
