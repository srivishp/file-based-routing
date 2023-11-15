import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link
            // Web pages are usually displayed as a stack,
            // ie we can go back a page by pressing the back button
            //* Using 'replace' clears the stack/history
            // and back button takes you to the last page on the browser but not of the app's

            //replace
            href="/portfolio"
          >
            The Portfolio Page
          </Link>
        </li>
        <li>
          <Link href="/clients"> The Clients Page</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
