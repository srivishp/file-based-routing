// -> A Slug is the unique identifying part of a web address, typically at the end of the URL.
//* [projectIdSlug] is a placeholder slug and it can be routed to, by any slug.
//# http://localhost:3000/portfolio/any_slug_here
//! Except http://localhost:3000/portfolio/list, because the "portfolio/list" route is already defined

import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return <h1>The Portfolio Project Page</h1>;
}

export default PortfolioProjectPage;
