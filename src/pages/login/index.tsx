import { useAuthCheck } from "../../hooks";

import { PageContainer } from "../../components";
import LoginForm from "./form";

const Login: React.FC = () => {
  useAuthCheck();

  return (
    <PageContainer>
      <p className="text-heading text-white mb-4">My App</p>

      <LoginForm />
    </PageContainer>
  );
};

export default Login;
