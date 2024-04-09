import { ReactNode } from "react";

type Props = {
  placeholder: string;
  icon: ReactNode;
};
const InputText = ({ placeholder, icon }: Props) => {
  return (
    <div className="flex items-center p-2 m-1 space-x-2 rounded-md bg-secondaybg">
      {icon}
      <input
        type="text"
        name=""
        id=""
        placeholder={placeholder}
        className="w-full outline-none bg-transparent text-primaryhead tracking-wide"
      />
    </div>
  );
};

export default InputText;
