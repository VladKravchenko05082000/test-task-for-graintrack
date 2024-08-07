import { Button } from "@radix-ui/themes";
import { Link } from "@tanstack/react-router";
import { PageContainer } from "../../components";

import { ROUTES } from "../../navigate/constants";

const NotFoundPage: React.FC = () => {
  return (
    <PageContainer>
      <p className="text-heading text-white">Not Found Page</p>

      <Button mt="4" size="2" color="gray" variant="classic" highContrast>
        <Link to={ROUTES.login} className="text-lg">
          Back
        </Link>
      </Button>
    </PageContainer>
  );
};

export default NotFoundPage;
