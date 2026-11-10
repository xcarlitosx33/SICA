
import "./StatCardGrid.css";

function StatCardGrid({ children, minCardWidth = 240 }) {
    return (
        <section
            className="stat-card-grid"
            style={{
                "--stat-card-min-width": `${minCardWidth}px`
            }}
        >
            {children}
        </section>
    );
}

export default StatCardGrid;
