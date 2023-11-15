import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "AMZ", name: "Amazon" },
    { id: "GGL", name: "Google" },
    { id: "MSFT", name: "Microsoft" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {/* Here the [clientIdSlug] takes Google, Amazon & Microsoft as concrete values*/}
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
