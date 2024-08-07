import { useTokenCheck, useResetAppData } from "../../hooks";

import { Button } from "@radix-ui/themes";
import { PageContainer } from "../../components";

const Home: React.FC = () => {
  const { resetAppData } = useResetAppData();

  useTokenCheck();

  return (
    <PageContainer>
      <p className="text-heading text-white">Hello world!</p>

      <Button mt="4" size="2" color="gray" variant="classic" highContrast onClick={resetAppData}>
        Back to Login
      </Button>
    </PageContainer>
  );
};

export default Home;
