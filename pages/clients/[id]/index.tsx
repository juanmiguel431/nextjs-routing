import React from "react";
import { useRouter } from "next/router";

const ClientsProjectPage: React.FC = (props) => {
  const router = useRouter();

  const onButtonClick = () => {
    router.push({
      pathname: '/clients/[id]/[clientProjectId]',
      query: {
        id: 1,
        clientProjectId: 123456789
      }
    });
  };

  return (
    <div>
      <div>The Projects of a given client</div>

      <button onClick={onButtonClick}>Load project A</button>
    </div>
  );
}

export default ClientsProjectPage;
