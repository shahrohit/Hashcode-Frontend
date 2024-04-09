type Props = {
  text?: string | number | null;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  radius?: string;
  className?: string;
  scale?: boolean;
  onClick?: () => void;
};

const Button = ({
  text,
  leftIcon,
  rightIcon,
  radius,
  className,
  scale = true,
  onClick,
}: Props) => {
  className = className || "";
  radius = radius || "none";
  text = text || null;
  leftIcon = leftIcon || null;
  rightIcon = rightIcon || null;

  return (
    <button
      className={`flex items-center justify-center ${className} rounded-${radius}`}
      onClick={onClick}
    >
      {leftIcon}
      {text && <p>{text}</p>}
      {rightIcon}
    </button>
  );
};

export default Button;
