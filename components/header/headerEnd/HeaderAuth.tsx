import Button from "@/components/button/Button";

const HeaderAuth = () => {
  return (
    <>
      <Button
        text="Sign In"
        className="hidden xs:block border-2 border-primarycol px-2 py-1 hover:bg-primarycol hover:text-white"
        radius="full"
      />
      <Button
        text="Sign Up"
        className="border-2 border-primarycol bg-primarycol text-white px-2 py-1"
        radius="full"
      />
    </>
  );
};

export default HeaderAuth;
