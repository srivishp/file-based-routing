import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query);

  return <h1>The Project Page for a specific project of a client </h1>;
}

export default SelectedClientProjectPage;
