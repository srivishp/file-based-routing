//! CATCH-ALL ROUTES
//* ... is used to define a catch all route -> [...slug].js
// If we add ... before a file name in a dynamic route,
// Next JS catches all the slugs after the concrete(non-dynamic) folder slug
// It then separates the slugs by the / in between them,
// and generates an array of strings in the router object

//! Example:
//todo: http://localhost:3000/blog/2020/12/25 generates as follows
//* blogIdSlug: ["2020","12","25"]

// We can use these values to filter and display specific pages or content as required
// Eg: 2020/12 can display blogs from entire december of 2020
// and 2020/12/25 can display blogs only on the 25th of december 2020
// so on and so forth...

import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();
  // here console log returns an array of strings
  console.log(router.query);
  return <h1> The Blog Posts Page</h1>;
}

export default BlogPostsPage;
