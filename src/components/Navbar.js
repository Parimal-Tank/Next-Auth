import Link from "next/link";
import { signIn, signOut, useSession, getSession } from "next-auth/react";

function Navbar() {
  const { data, status } = useSession();

  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul className="main-nav">
        <li>
          <Link legacyBehavior href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blogpages">
            <a>Blog Pages</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        {status === "unauthenticated" && (
          <li>
            <Link legacyBehavior href="/api/auth/signin">
              <a
                onClick={(e) => {
                  e.preventDefault(), signIn();
                }}
              >
                Sign In
              </a>
            </Link>
          </li>
        )}

        {status === "authenticated" && (
          <li>
            <Link legacyBehavior href="/api/auth/signout">
              <a
                onClick={(e) => {
                  e.preventDefault(), signOut();
                }}
              >
                Sign Out
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
