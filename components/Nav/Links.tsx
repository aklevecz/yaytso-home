import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { path: "https://yaytso.art", name: "Create" },
  { path: "https://air.yaytso.art/eggs/la", name: "Pizza" },
  { path: "/studio", name: "Studio" },
  // { path: "/map", name: "Map" },
  { path: "/openings", name: "Openings" },
  { path: "/about", name: "About" },
];

export default function Links() {
  const router = useRouter();
  return (
    <>
      {links.map((link) => (
        <Link key={link.path} href={link.path}>
          <span
            style={{
              color: router.asPath === link.path ? "red" : "white",
              mixBlendMode: "difference",
              cursor: "pointer",
            }}
          >
            {link.name}
          </span>
        </Link>
      ))}
      {/* <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/studio">Studio</Link>
      <Link href="/map">Map</Link>
      <Link href="/about">About</Link> */}
    </>
  );
}
