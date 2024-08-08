import { useAuthCheck, useSetUserData } from "../../hooks";

import { PageContainer } from "../../components";
import LoginForm from "./form";

const Login: React.FC = () => {
  useAuthCheck();
  const { handleOnSubmit, pending } = useSetUserData();

  return (
    <PageContainer>
      <p className="text-heading text-white mb-4">My App</p>

      <LoginForm handleOnSubmit={handleOnSubmit} pending={pending} />
    </PageContainer>
  );
};

export default Login;
