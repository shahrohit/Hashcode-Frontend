import Image from "next/image";
import Link from "next/link";

type Props = {
  link?: string;
  logo: string;
  title?: string;
  textSize?: string;
  logoStyle: string;
};

const Logo = ({ link, logo, title }: Props) => {
  return (
    <Link href={link || "/"} className="flex items-center">
      <div className={`relative h-12 w-12`}>
        <Image src={logo} fill={true} alt="logo" className="" />
      </div>
      {title && (
        <h1 className={`hidden xxs:block xxs:text-lg xs:text-2xl`}>{title}</h1>
      )}
    </Link>
  );
};

export default Logo;
