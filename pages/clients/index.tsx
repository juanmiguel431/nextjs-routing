import React from "react";
import Link from "next/link";

const ClientsPage: React.FC = (props) => {
  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        <li><Link href="/clients/1">Juan Miguel</Link></li>

        <li><Link href={{
          pathname: '/clients/[id]',
          query: { id: '2' }
        }}>Luis Miguel</Link></li>
      </ul>
    </div>
  );
}

export default ClientsPage;
