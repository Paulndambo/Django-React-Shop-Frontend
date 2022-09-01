import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() =>
        localStorage.getItem("authTokens")
            ? jwt_decode(localStorage.getItem("authTokens"))
            : null
    );
    const [authToken, setAuthToken] = useState(() =>
        localStorage.getItem("authTokens")
            ? JSON.parse(localStorage.getItem("authTokens"))
            : null
    );
    //const [loading, setLoading] = useState(true);

    console.log(user, authToken)

    const loginUser = async (e) => {
        e.preventDefault();

        let response = await fetch("https://django-react-shop-api.herokuapp.com/api/token/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              username: e.target.username.value,
              password: e.target.password.value,
            }),
          }
        );
        let data = await response.json();
        console.log("Data", data);
        console.log("Response", response);
        if (response.status === 200) {
            setAuthToken(data);
            setUser(jwt_decode(data.access));
            localStorage.setItem("authTokens", JSON.stringify(data));
            window.location.replace("/");
        } else {
            alert("Wrong Credentials");
        }
    };

    const logoutUser = () => {
      localStorage.removeItem("authTokens");
      window.location.replace("/login");
    };

    let contextData = {
        loginUser: loginUser,
        logoutUser: logoutUser,
    };

    return (
        <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
    );
};

export default AuthContext;
