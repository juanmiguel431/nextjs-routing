import React from "react";
import { useRouter } from "next/router";

interface PortfolioProjectPageQueryProps {
  projectId?: number;
}

const PortfolioProjectPage: React.FC = () => {

  const router = useRouter();

  console.log('JMPC1', router.pathname);
  console.log('JMPC2', router.query);

  const queryParams = router.query as PortfolioProjectPageQueryProps;
  console.log('JMPC3', queryParams.projectId);

  return (
    <div>Portfolio Project Page</div>
  );
}

export default PortfolioProjectPage;
