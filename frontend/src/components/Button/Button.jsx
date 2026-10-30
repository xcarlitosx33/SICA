import "./Button.css";

function Button({
    children,
    variant = "secondary",
    className = "",
    type = "button",
    ...props
}) {
    return (
        <button
            type={type}
            className={`sica-button sica-button--${variant} ${className}`.trim()}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;