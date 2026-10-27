
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function useAuth() {
    const navigate = useNavigate();

    const logout = useCallback(() => {
        localStorage.removeItem("sicaSesion");
        sessionStorage.removeItem("sicaSesion");

        navigate("/", { replace: true });
    }, [navigate]);

    return {
        logout,
    };
}

export default useAuth;
