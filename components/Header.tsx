import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <Image
        src="/logos/GuriiEcoGames_logo_2x.png"
        alt="Gurii Eco Games Logo"
        width={100}
        height={100}
      />
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/twitter">Twitter</Link>
          </li>
          <li>
            <Link href="/support">Support</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
