export default function isActivePathname(
  pathname: string,
  href: string
): boolean {
  let rootName = pathname.split("/")[1];
  let linkName = href.substring(1);
  return rootName === linkName;
}
