import { getCurrentUser } from "../actions/getCurrentUser";
import LoginClient from "../components/auth/LoginClient";
import "./login.css";

const Login = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div style={{ backgroundColor: "#f2f2f2", height: "100%" }}>
      <LoginClient currentUser={currentUser} />
    </div>
  );
};

export default Login;
