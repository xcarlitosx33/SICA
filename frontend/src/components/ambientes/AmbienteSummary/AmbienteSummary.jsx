import "./AmbienteSummary.css";

function AmbienteSummary() {
    return (
        <section className="ambiente-summary">

            <div className="summary-card">
                <div className="summary-card-content">
                    <span className="summary-card-label">
                        Total de ambientes
                    </span>

                    <strong className="summary-card-value">
                        14
                    </strong>
                </div>
            </div>

            <div className="summary-card">
                <div className="summary-card-content">
                    <span className="summary-card-label">
                        Ambientes disponibles
                    </span>

                    <strong className="summary-card-value">
                        12
                    </strong>
                </div>
            </div>

            <div className="summary-card">
                <div className="summary-card-content">
                    <span className="summary-card-label">
                        En mantenimiento
                    </span>

                    <strong className="summary-card-value">
                        2
                    </strong>
                </div>
            </div>

        </section>
    );
}

export default AmbienteSummary;