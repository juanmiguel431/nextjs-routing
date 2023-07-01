import React from "react";
import { useRouter } from "next/router";

const SelectedClientProjectPage: React.FC = (props) => {

  const router = useRouter();

  console.log('JMPC1', router.pathname)
  console.log('JMPC2', router.query)

  return (
    <div>Client Project Page</div>
  );
}

export default SelectedClientProjectPage;
