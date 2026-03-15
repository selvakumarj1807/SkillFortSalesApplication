import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GoogleSuccess() {

  const navigate = useNavigate();

  useEffect(() => {

    const params = new URLSearchParams(window.location.search);

    // GET values from URL
    const token = params.get("token");
    const userId = params.get("userId");
    const name = params.get("name");
    const email = params.get("email");
    const picture = params.get("picture");
    const firstName = params.get("firstName");
    const lastName = params.get("lastName");

    if (token) {

      // SET values to localStorage
      localStorage.setItem("userToken", token);
      localStorage.setItem("userId", userId || "");

      const user = {
        name,
        email,
        picture,
        firstName,
        lastName,
      };

      localStorage.setItem("user", JSON.stringify(user));

      // redirect to dashboard
      navigate("/user");

    }

  }, [navigate]);

  return <div>Logging you in...</div>;
}