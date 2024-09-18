import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Jed Thompson's blog",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
