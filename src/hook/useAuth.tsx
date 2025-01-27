import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context; // Return the entire context
};

export default useAuth;
