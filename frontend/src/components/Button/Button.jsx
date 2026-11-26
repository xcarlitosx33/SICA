
import "./Button.css";

function Button({
    children,
    variant = "default",
    className = "",
    type = "button",
    ...props
}) {
    const variantClass =
        variant === "default" ? "" : `sica-button--${variant}`;

    return (
        <button
            type={type}
            className={`sica-button ${variantClass} ${className}`.trim()}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
