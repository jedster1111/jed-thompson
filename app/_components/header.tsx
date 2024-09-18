import Link from "next/link";
import { to } from "../blog/blogRoutes";
import { ReactNode } from "react";

type NavbarLinkProps = {
  href: string;
  children: ReactNode;
};

const NavbarLink = ({ href, children }: NavbarLinkProps) => {
  return (
    <Link className="flex justify-center p-2 m-2 border-2 rounded min-w-24" href={href}>
      {children}
    </Link>
  );
};

export const Header = () => (
  <header className="border-b-2">
    <nav>
      <ul className="flex flex-wrap items-center justify-start shrink-0">
        <li>
          <NavbarLink href="/">home</NavbarLink>
        </li>
        <li>
          <NavbarLink href={to.Blogs()}>blog</NavbarLink>
        </li>
      </ul>
    </nav>
  </header>
);
