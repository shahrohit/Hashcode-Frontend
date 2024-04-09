import Image from "next/image";
import Link from "next/link";

const HeaderLogo = ({ link }: { link?: string }) => {
  return (
    <Link href={link || "/"} className="flex space-x-1">
      <Image src="/code.png" height={35} width={35} alt="logo" className="" />
    </Link>
  );
};

export default HeaderLogo;
